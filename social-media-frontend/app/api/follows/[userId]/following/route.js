import { db } from "../../../../data/db";

export async function GET(req, { params }) {
  const { userId } = await params;

  const following = db.follows
    .filter((f) => f.followerId === parseInt(userId))
    .map((f) => db.users.find((user) => user.id === f.followingId));

  return new Response(JSON.stringify(following), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
