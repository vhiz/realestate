import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";

export async function POST() {
  try {
    const session = await getSession();
    session.destroy();
    return NextResponse.json({ message: "Logged out" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "something went wrong" }, { status: 400 });
  }
}
