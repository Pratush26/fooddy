import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import LogoutButton from "@/components/Buttons/Logout";

interface JwtPayload {
    _id: string;
    email: string;
    name: string;
    photo: string;
    role: string;
    iat: number;
    exp: number;
}

export default async function Dashboard() {
    const token = (await cookies()).get("accessToken")?.value;

    if (!token) redirect("/login");

    let user: JwtPayload;
    try {
        user = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload;
    } catch {
        redirect("/login");
    }

    return (
        <main className="w-11/12 text-center mx-auto p-6 my-20">
            <h1 className="text-3xl font-semibold mb-4">
                Welcome, {user.name} 👋
            </h1>

            <div className="rounded-lg border p-4 flex flex-col items-center justify-center gap-3">
                <div className="relative h-20 aspect-square rounded-full overflow-hidden">
                    <Image
                        src={user.photo}
                        fill
                        alt={user.name}
                        className="object-cover"
                    />
                </div>
                <Badge variant={"secondary"}>
                    <strong>Role:</strong> {user.role}
                </Badge>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="m-2 w-fit mx-auto">
                <LogoutButton />
            </div>
        </main>
    );
}
