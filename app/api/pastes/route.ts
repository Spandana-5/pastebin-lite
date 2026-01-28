import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate content
    if (!body.content || body.content.trim() === "") {
      return Response.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    // ✅ Generate paste ID
    const id = nanoid(8);

    // ✅ Store paste directly as OBJECT (Upstash supports this)
    await redis.set(`paste2:${id}`, {
      content: body.content,
      createdAt: Date.now(),
      views: 0,
    });

    // ✅ Return response
    return Response.json({
      id,
      url: `${process.env.BASE_URL}/p/${id}`,
    });
  } catch (error) {
    console.error("Error creating paste:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
