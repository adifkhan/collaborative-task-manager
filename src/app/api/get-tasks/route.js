import Task from "@/models/task";
import { NextResponse } from "next/server";
import { connect } from "@/helper/dbConfig";

connect();

export async function GET(request) {
  try {
    const result = await Task.find();

    const response = NextResponse.json(
      {
        result,
      },
      { status: 200 }
    );
    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
