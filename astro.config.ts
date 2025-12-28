import { defineConfig } from "astro/config";

// mdx plugins
import { remarkReadingTime, rehypeTransformers } from "./lib";

// astro integrations
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    // astro integrations
    integrations: [react(), mdx()],

    // rehype/remark plugin configs
    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [...rehypeTransformers({ theme: 'github-dark' })],
    },


    // DEV options
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
        plugins: [tailwindcss()],
    },
    // link prefetching
    prefetch: {
        defaultStrategy: "viewport"
    },
    // no trailing slash
    trailingSlash: "never",

});