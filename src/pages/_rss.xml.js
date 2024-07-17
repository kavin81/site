import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {siteConfig } from '../site.config';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "rss feed title",
		description: "rss feed desc",
		site: context.site,
		// items: posts.map((post) => ({
		// 	...post.data,
		// 	link: `/blog/${post.slug}/`,
		// })),
	});
}
