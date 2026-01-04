import { z } from "zod";

const httpsUrl = z
    .url()
    .startsWith("https://", { message: "Must be an https URL" });

const socialUrl = z
    .url()
    .refine(
        (url) => url.startsWith("https://") || url.startsWith("mailto:"),
        { message: "Must be https:// or mailto:" }
    );


const SocialSchema = z.object({
    label: z.string(),
    url: socialUrl,
    username: z.string(),
});

const HeaderLinkSchema = z.object({
    label: z.string(),
    url: z.string(),
});

const GiscusSchema = z.object({
    repo: z.string(),
    repoId: z.string(),
    category: z.string(),
    categoryId: z.string(),
});


export const ConfigSchema = z
    .object({
        siteName: z.string(),
        siteTitle: z.string(),
        siteAuthor: z.string(),
        siteDescription: z.string(),
        siteURL: httpsUrl,

        siteSocials: z.array(SocialSchema),
        siteHeader: z.array(HeaderLinkSchema),
        siteGiscus: GiscusSchema,
    })
    .strict();


export type Config = z.infer<typeof ConfigSchema>;
