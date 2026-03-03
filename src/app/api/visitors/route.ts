import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// In-memory count of homepage requests (resets on server/instance restart)
let requestCount = 0;

export async function GET() {
  requestCount += 1;
  return NextResponse.json({ count: requestCount });
}
