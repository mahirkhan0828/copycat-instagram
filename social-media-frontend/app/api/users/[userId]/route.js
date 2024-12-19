import { db } from "../../../data/db";

export async function GET(req, { params }) {
  const { userId } = await params;

  const user = db.users.find((u) => u.id === parseInt(userId, 10));
  if (!user) {
    return new Response(
      JSON.stringify({ error: "User not found" }),
      { status: 404 }
    );
  }

  const userPosts = db.posts.filter((post) => post.userId === user.id);

  return new Response(
    JSON.stringify({ user, posts: userPosts }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
