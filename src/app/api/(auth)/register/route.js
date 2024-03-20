import { NextResponse } from "next/server";

import bcryptjs from "bcryptjs";

import { User } from "@/lib/User";
import { connectToDB } from "@/lib/connectDB";

export async function POST(request) {
  connectToDB();
  const body = await request.json();
  const { username, email, password } = body;
  try {
    const existingUser = await User.findOne({
      $or: [
        { username: { $regex: new RegExp(`^${username}$`, "i") } },
        { email: { $regex: new RegExp(`^${email}$`, "i") } },
      ],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User Already Exists" },
        { status: 409 }
      );
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = {
      username: username,
      email: email,
      password: hashedPassword,
    };

    await User.create(newUser);

    return NextResponse.json({ msg: "User created" }, { status: 201 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
