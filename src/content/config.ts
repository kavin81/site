import { defineCollection, z } from "astro:content";


/** Remove duplicates from array and converts all strings to lowercase */
function removeLowerCaseDups(array: string[]) {
	return [...new Set(array.map(str => str.toLowerCase()))];
}



const blog = defineCollection({
	type: "content",
	schema: ({image}) => z.object({
		title: z.string().max(80),
		desc: z.string().max(200),
		publishedAt: z
			.string()
			.transform(
				(str) => new Date(str)
			),
		updatedAt: z
			.string()
			.optional()
			.transform(
				(str) => (str ? new Date(str) : undefined)
			),
		draft: z.boolean().default(false),
		tags: z
			.string()
			.transform(
				(val) => removeLowerCaseDups(
					val.split(',').map(
						tag => tag.trim()
					)
				)
			),
		hero_img: z.object({
			src: image(),
			alt: z.string(),
		}),
	})
});

// TODO: add needed meta-data for `/projects`
const project = defineCollection({
	type: "content",
	// ({image}) => z.object({ image: image().optional()
	schema: z.object({
		title: z.string().max(80),
	})
});

export const collections = { blog, project };
