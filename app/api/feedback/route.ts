import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const message = String(form.get("message") ?? "").trim();
    const file = form.get("file") as File | null;

    if (!message || !file) {
      return NextResponse.json(
        { ok: false, message: "Message and file are required." },
        { status: 400 },
      );
    }

    const uploadDir = path.join(process.cwd(), ".uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      ok: true,
      message: `Received: "${message}", file: "${file.name}"`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
