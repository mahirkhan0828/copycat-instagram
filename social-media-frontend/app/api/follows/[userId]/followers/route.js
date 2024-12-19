import { db } from "../../../../data/db";

export async function GET(req, { params }) {
  const { userId } = await params;

  const followers = db.follows
    .filter((f) => f.followingId === parseInt(userId))
    .map((f) => db.users.find((user) => user.id === f.followerId));

  return new Response(JSON.stringify(followers), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
