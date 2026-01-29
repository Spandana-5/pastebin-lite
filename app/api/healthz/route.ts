import { redis } from "@/lib/redis";

export async function GET() {
  try {
    // ✅ Simple Redis test that always works in Upstash
    await redis.set("healthz", "ok");

    const value = await redis.get("healthz");

    return Response.json({ ok: value === "ok" });
  } catch (error) {
    return Response.json({ ok: false });
  }
}
