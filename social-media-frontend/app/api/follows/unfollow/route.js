import { db } from "../../../data/db";

export async function POST(req) {
  const body = await req.json();

  db.follows = db.follows.filter(
    (f) =>
      f.followerId !== body.followerId || f.followingId !== body.followingId
  );

  return new Response(
    JSON.stringify({ message: "Unfollow successful" }),
    { status: 200 }
  );
}
