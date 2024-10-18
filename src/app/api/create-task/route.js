import { connect } from "@/helper/dbConfig";
import Task from "@/models/task";
import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, description } = reqBody;

    // create new task //
    const newTask = new Task({
      title,
      description,
    });

    const result = await newTask.save();

    console.log("res", result);

    const response = NextResponse.json(
      {
        message: "New task created",
      },
      { status: 201 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
