import { z } from "zod";

const SocialSchema = z.object({
    label: z.string(),
    url: z.url().refine(
        (url) => ["https:", "mailto:"].some(scheme => url.startsWith(scheme)),
        { message: "Social URL must use https: or mailto: scheme" }
    ),
    username: z.string(),
});

const ConfigSchema = z.object({
    siteName: z.string(),
    siteTitle: z.string(),
    siteURL: z.url().refine(
        (url) => url.startsWith("https:"),
        { message: "Site URL must use https: scheme" }
    ),
    siteAuthor: z.string(),
    siteDescription: z.string(),
    siteSocials: z.array(SocialSchema),
    siteAnalyticsID: z.string().describe("umami ID"),
});

export { ConfigSchema };
