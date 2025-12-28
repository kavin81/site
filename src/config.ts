import { ConfigSchema } from "~/types"

export const config = ConfigSchema.parse({
    siteName: "kavin",
    siteTitle: "placeholder",
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
        {
            label: "Email",
            url: "mailto:kavin.srinivasan2@gmail.com",
            username: "kavin.srinivasan2@gmail.com",
        }
    ],
    siteAnalyticsID: "placeholder-analytics-id",

    siteHeader: [
        {
            label: "posts",
            url: "/posts",
        },
        {
            label: "whoami",
            url: "/whoami",
        },
        {
            label: "links",
            url: "/urls",
        }
    ]

})
