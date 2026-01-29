import { redis } from "../../lib/redis";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.content || body.content.trim() === "") {
    return Response.json({ error: "content is required" }, { status: 400 });
  }

  const id = nanoid(8);

  await redis.set(`paste:${id}`, {
    content: body.content,
    createdAt: Date.now(),
    ttl_seconds: body.ttl_seconds ?? null,
    max_views: body.max_views ?? null,
    views: 0,
  });

  return Response.json({
    id,
    url: `http://localhost:3000/p/${id}`,
  });
}
