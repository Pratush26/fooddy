import { cookies } from "next/headers";
import NavLink from "../LinkWrapper/NavLink";
import Logo from "../ui/Custom/Logo";
import Sidebar from "./sidebar";
import jwt from 'jsonwebtoken'

interface JwtPayload {
    _id: string;
    email: string;
    name: string;
    photo: string;
    role: string;
    iat: number;
    exp: number;
}
export default async function Navbar() {
    const token = (await cookies()).get("accessToken")?.value;

    let user: JwtPayload | null = null;

    if (token) {
        try {
            user = jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET!
            ) as JwtPayload;
        } catch {
            user = null;
        }
    }
    return (
        <header className="bg-muted text-white w-full sticky top-0 z-50">
            <nav className="flex items-center justify-between w-11/12 mx-auto my-4 text-sm font-medium">
                <div className="text-chart-3">
                    <Logo />
                </div>
                <div className="space-x-3 hidden sm:block">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/menu">Menu Items</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                </div>
                <Sidebar user={user ?? null} />
            </nav>
        </header>
    )
}