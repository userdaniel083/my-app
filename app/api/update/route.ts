import { NextResponse } from "next/server";
import { generateSystemInfo } from "../../../lib/checkInstallation";

export async function GET() {
  const systemInfo = generateSystemInfo();
  return NextResponse.json(systemInfo);
}