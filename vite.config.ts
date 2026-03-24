import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import { playwright } from "@vitest/browser-playwright"
import { defineConfig } from "vitest/config"

export default defineConfig({
    server: { allowedHosts: ["preview1.burnysc2.xyz"] },
    plugins: [tailwindcss(), sveltekit()],
    ssr: {
        noExternal: ["peerjs"],
    },
    test: {
        expect: { requireAssertions: true },
        browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium", headless: true }],
        },
        setupFiles: ["./vitest-setup-client.ts"],
        include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
        exclude: ["src/lib/server/**"],
    },
})
