import { ConfigSchema, type Config } from "~/types";

const rawConfig: Config = {
    siteName: "kavin",
    siteTitle: "kavin",
    siteAuthor: "@kavin81",
    siteDescription:
        "another highly opinionated boring {dev} blog for no particular reason.",
    siteURL: "https://skavin.in",

    siteGiscus: {
        repo: "kavin81/site",
        repoId: "R_kgDOQtOWKg",
        category: "Announcements",
        categoryId: "DIC_kwDOQtOWKs4C0YtJ",
    },

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
        },
    ],

    siteHeader: [
        { label: "posts", url: "/posts" },
        { label: "whoami", url: "/whoami" },
        { label: "links", url: "/urls" },
    ],
};


export const config = ConfigSchema.parse(rawConfig);
