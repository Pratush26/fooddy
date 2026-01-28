import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(`${process.env.SERVER}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include"
    });

    const data = await res.json();
    return NextResponse.json(data ?? { success: false, message: "Something went wrong!" }, { status: res.status });

  } catch (err) {
    console.error(err);
    return NextResponse.json( { success: false, message: "Server error" }, { status: 500 } );
  }
}