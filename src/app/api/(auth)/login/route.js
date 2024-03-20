import { NextResponse } from "next/server";

import { User } from "@/lib/User";
import { connectToDB } from "@/lib/connectDB";
import bcryptjs from "bcryptjs";
import { getSession } from "@/lib/getSession";

export async function POST(request) {
  connectToDB();
  const body = await request.json();
  const { username, password } = body;
  try {
    const session = await getSession();

    const userExit = await User.findOne({
      username: { $regex: new RegExp(`^${username}$`, "i") },
    });
    if (!userExit)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const validPassword = bcryptjs.compareSync(password, userExit.password);

    if (!validPassword)
      return NextResponse.json({ error: "Invalid password" }, { status: 409 });

    session.userId = userExit._id;
    session.username = userExit.username;
    session.email = userExit.email;
    session.isLoggedIn = true;

    await session.save();
    return NextResponse.json(
      { msg: `Welcome ${userExit.username}` },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
