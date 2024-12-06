import fs from 'fs/promises';
import posthog from "posthog-js";

export async function GET() {
    const resumeFile = await fs.readFile('/tmp/resume.pdf');
    posthog.capture("Resume Downloaded");
    return new Response(resumeFile, {
        status: 200,
    });
}