import { db } from "../../../data/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = parseInt(searchParams.get("userId"), 10);

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "User ID is required" }),
      { status: 400 }
    );
  }

  // Get user feed: posts from followed users and own posts
  const followedUserIds = db.follows
    .filter((f) => f.followerId === userId)
    .map((f) => f.followingId);

  const feedPosts = db.posts.filter(
    (post) => followedUserIds.includes(post.userId) || post.userId === userId
  );

  // Sort posts by newest first
  const sortedPosts = feedPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return new Response(JSON.stringify(sortedPosts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
