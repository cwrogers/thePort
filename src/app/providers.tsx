
"use client"
import posthog from "posthog-js";
import {PostHogProvider} from "posthog-js/react";
import {ScriptProps} from "next/script";
import {useEffect} from "react";




export const ThePortPostHogProvider = ({ children } : ScriptProps) => {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "", {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            person_profiles: "never",
            capture_pageview: true,
            capture_heatmaps: true,
            capture_dead_clicks: true,
            autocapture: true
        });
    }, []);
    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    );
}