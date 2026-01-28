import { redis } from "@/lib/redis";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ Await params (Next.js 16)
    const { id } = await context.params;

    // ✅ Fetch paste from Redis
    const data = await redis.get(`paste2:${id}`);

    if (!data) {
      return Response.json(
        { error: "Paste not found" },
        { status: 404 }
      );
    }

    // ✅ If Upstash returns string → parse
    if (typeof data === "string") {
      return Response.json(JSON.parse(data));
    }

    // ✅ If Upstash returns object → return directly
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching paste:", error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
