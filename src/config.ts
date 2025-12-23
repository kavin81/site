import { ConfigSchema } from "~/types"

export const config = ConfigSchema.parse({
    siteName: "placeholder",
    siteAuthor: "placeholder",
    siteDescription: "placeholder",
    siteURL: "https://example.com",
    siteSocials: [
        {
            label: "GitHub",
            url: "https://github.com/kavin81",
            username: "kavin81",
        },
        {
            label: "LinkedIn",
            url: "https://linkedin.com/in/kavin81",
            username: "kavin81",
        },
    ]
})

