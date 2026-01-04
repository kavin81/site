import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: ({ image }) =>
        z.object({
            // primary fields
            slug: z.string().optional(),
            // metadata fields
            title: z.string(),
            description: z.string().optional(),
            cover: image().optional(),
            tags: z.array(z.string()).refine((tags) => tags.length > 0, {
                message: "each post must have at least one tag",
            }),
            // date/[time] fields
            publishedAt: z.coerce.date(),
            modifiedAt: z.coerce.date().optional(),
            time2read: z.number().optional(), // auto-generated
        }),
});

export const collections = { posts };
