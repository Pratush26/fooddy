import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.SERVER}/food/categories`, {
        cache: "no-store"
    });
    const data = await res.json();
    return NextResponse.json(data ?? { success: false, message: "Something went wrong!" }, { status: res.status });

  } catch (err) {
    console.error(err);
    return NextResponse.json( { success: false, message: "Server error" }, { status: 500 } );
  }
}