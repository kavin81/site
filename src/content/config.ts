import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: ({ }) =>
        z.object({
            slug: z.string().optional(),

            title: z.string(),
            description: z.string().optional(),
            tags: z.array(z.string()).min(1),

            publishedAt: z.coerce.date(),
            modifiedAt: z.coerce.date().optional(),
            time2read: z.number().optional(),


        }),
});

export const collections = { posts };
