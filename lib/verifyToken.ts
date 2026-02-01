import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export default function verifyToken(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) return null;

    try {
        const payload = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET!
        ) as {
            _id: string;
            email: string;
            name: string;
            role: string;
            photo: string;
            iat: number;
            exp: number;
        };

        const role = payload.role;

        return role;
    } catch (err) {
        // token expired or invalid
        return null;
    }
}