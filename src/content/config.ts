import { defineCollection, getCollection, z } from "astro:content";

function removeLowerCaseDups(array: string[]) {
	return [...new Set(array.map(str => str.toLowerCase()))];
}


const blog = defineCollection({
	type: "content",

	schema: ({ image }) => z.object({
		title: z.string().max(80),
		desc: z.string().max(200),
		publishedAt: z
			.string()
			.transform(
				(str) => new Date(str)
			),
		UpdatedAt: z
			.string()
			.transform(
				(str) => new Date(str)
			).optional(),
		updatedAt: z
			.string()
			.optional()
			.transform(
				(str) => (str ? new Date(str) : undefined)
			),
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
			credit: z.object({
				name: z.string().transform(
					(val) => val.split(' ').map(
						word => word.charAt(0).toUpperCase() + word.slice(1)
					).join(' ')
				),
				url: z.string().url(),
			})
		}),
	})
});

// TODO: add needed meta-data for `/projects`
const project = defineCollection({
	type: "content",
	// ({image}) => z.object({ image: image().optional()z.object({ image: image().optional()
	schema: z.object({
		title: z.string().max(80),
	})
});

export const collections = { blog, project };
