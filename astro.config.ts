import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/remark-reading-time.js"

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    markdown: {
        remarkPlugins: [
            remarkReadingTime,
        ],
    },

    integrations: [
        react()
    ],

    vite: {
        server: {
            strictPort: true,
            port: 3000,
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
            open: true,
        },

        // @ts-expect-error
        plugins: [tailwindcss()],
    },
});