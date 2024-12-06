import fs from 'fs/promises';
import {NextRequest} from "next/server";
import {PostHog} from "posthog-node"


const posthog = new PostHog(
process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

export async function GET(req : NextRequest) {
    const resumeFile = await fs.readFile('/tmp/resume.pdf');

    const dateTime = new Date();
    dateTime.setMinutes(0,0,0);

    let distinctId = req.headers.get('X-Forwarded-For') ?? 'unknown';
    distinctId += '_' + dateTime.toISOString();

    posthog.capture({
        event: 'resume_downloaded',
        distinctId: distinctId
    })

    return new Response(resumeFile, {
        status: 200,
    });
}