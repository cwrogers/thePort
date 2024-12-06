
"use client"
import posthog from "posthog-js";
import {PostHogProvider} from "posthog-js/react";
import {ScriptProps} from "next/script";


if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only"
    });
}


export const ThePortPostHogProvider = ({ children } : ScriptProps) => {
    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    );
}