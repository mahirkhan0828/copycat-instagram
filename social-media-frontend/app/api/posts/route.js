import { db } from "../../data/db";

export async function POST(req) {
  const body = await req.json();

  const newPost = {
    id: Date.now(),
    content: body.content,
    image: body.image || null,
    userId: body.userId,
    createdAt: new Date().toISOString(),
  };

  db.posts.push(newPost);

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
