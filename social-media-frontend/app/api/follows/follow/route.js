import { db } from "../../../data/db";

export async function POST(req) {
  const body = await req.json();

  const alreadyFollowing = db.follows.find(
    (f) =>
      f.followerId === body.followerId && f.followingId === body.followingId
  );

  if (!alreadyFollowing) {
    db.follows.push({
      followerId: body.followerId,
      followingId: body.followingId,
    });
  }

  return new Response(
    JSON.stringify({ message: "Follow successful" }),
    { status: 201 }
  );
}
