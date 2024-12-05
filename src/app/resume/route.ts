import fs from 'fs/promises';

export async function GET() {
    const resumeFile = await fs.readFile('/tmp/resume.pdf');
    return new Response(resumeFile, {
        status: 200,
    });
}