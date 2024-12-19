import { db } from "../../../data/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = parseInt(searchParams.get("userId"), 10);

  const userPosts = db.posts.filter((post) => post.userId === userId);

  return new Response(JSON.stringify(userPosts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
