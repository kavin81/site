import { type VercelConfig } from "@vercel/config/v1"

export const config: VercelConfig = {
    name: "site",
    framework: 'astro',
    cleanUrls: true,
    // TODO: configure `VercelConfig.alias` for `skavin.in`
}