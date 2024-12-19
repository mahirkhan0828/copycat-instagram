import { db } from "../../../data/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const existingUser = db.users.find((user) => user.email === body.email);

  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  const newUser = {
    id: Date.now(),
    username: body.username,
    email: body.email,
    password: body.password,
  };

  db.users.push(newUser);

  return NextResponse.json(
    { user: newUser },
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
