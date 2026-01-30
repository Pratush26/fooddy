import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const result = await fetch(`${process.env.SERVER}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await result.json();

    const response = NextResponse.json(data, { status: result.status });

    const setCookie = result.headers.get("set-cookie");
    if (setCookie)
      response.headers.set("set-cookie", setCookie);

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}