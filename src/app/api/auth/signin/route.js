import { connect } from "@/helper/dbConfig";
import User from "@/models/users";
import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // check if the user already exists //
    const user = await User.findOne({ email });
    if (!user) {
      // create new user //
      const newUser = new User({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();

      // create token data //
      const tokenData = {
        id: savedUser._id,
        email: savedUser.email,
      };
      // create token by jwt //
      const token = await jwt.sign(tokenData, "mySecretforTaskManager", {
        expiresIn: "1d",
      });

      const response = NextResponse.json(
        {
          message: "New user Created",
        },
        { status: 201 }
      );
      response.cookies.set("token", token, { httpOnly: true });
      return response;
    }

    // verify the password as the user exists //

    if (user.password !== password) {
      return NextResponse.json({ message: "Invalid Password" }, { status: 400 });
    }
    // create token data //
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    // create token by jwt //
    const token = await jwt.sign(tokenData, "mySecretforTaskManager", {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      {
        message: "login successfully",
      },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
