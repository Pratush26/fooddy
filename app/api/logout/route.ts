import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(`${process.env.SERVER}/user/logout`, {
      method: "POST",
      credentials: "include",
      cache: "no-store"
    });

    const data = await res.json();

    const response = NextResponse.json(data, { status: res.status });

    const setCookies = res.headers.getSetCookie?.() ?? [];
    for (const c of setCookies) response.headers.append("set-cookie", c);

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
