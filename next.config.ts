import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    env: {
        BUILD_DATE: new Date().toLocaleString('en-US', {month: 'short',day: 'numeric',year: 'numeric'})
    }
};

export default nextConfig;
