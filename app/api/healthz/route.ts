import { redis } from "@/lib/redis";

export async function GET() {
  try {
    await redis.ping();
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false }, { status: 500 });
  }
}
