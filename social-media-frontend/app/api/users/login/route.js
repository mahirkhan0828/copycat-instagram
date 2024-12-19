import { db } from "../../../data/db";
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();

  const user = db.users.find(
    (u) => u.email === body.email && u.password === body.password
  );

  if (user) {
    return NextResponse.json({ user });
  }

  return NextResponse.json(
    { error: "Invalid email or password" },
    { status: 401 }
  );
}
