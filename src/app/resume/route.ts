import fs from 'fs/promises';
import {captureEvent} from "@/app/providers";
import {NextRequest} from "next/server";

export async function GET(req : NextRequest) {
    const resumeFile = await fs.readFile('/tmp/resume.pdf');
    captureEvent("resume_viewed", req.headers);
    return new Response(resumeFile, {
        status: 200,
    });
}