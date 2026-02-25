import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "likvidnost-app",
    timestamp: new Date().toISOString(),
  });
}
