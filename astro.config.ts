import { defineConfig } from "astro/config";

// mdx plugins
import { remarkReadingTime, rehypeTransformers } from "./lib";

// integrations
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";


export default defineConfig({
    integrations: [
        react(),
        icon(),
        mdx(),
    ],

    experimental: {
        fonts: [
            /*  TODO: eventually use astro font API once it's stable
                {
                    provider: fontProviders.google(),
                    name: "IBM Plex Sans",
                    subsets: ["latin"],
                    weights: ["400", "600"],
                    fallbacks: ["sans-serif"],
                    cssVariable: "--font-ibm-plex-sans",
                },
                {
                    provider: fontProviders.google(),
                    name: "Fira Code",
                    subsets: ["latin"],
                    weights: ["400", "600"],
                    fallbacks: ["monospace"],
                    cssVariable: "--font-fira-code",
                },
            */
        ]
    },

    // rehype/remark plugin configs
    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [...rehypeTransformers({ theme: 'plastic' })],
    },


    server: {
        port: 3001,
        open: true,
    },
    vite: {
        server: {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        },
        plugins: [tailwindcss()],


        build: {
            chunkSizeWarningLimit: 100,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                    }
                }
            },

        }
    },
    prefetch: {
        defaultStrategy: "viewport"
    },
    trailingSlash: "never",
});