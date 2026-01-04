import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
    const posts = (await getCollection("posts")).sort(
        (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
    );

    return rss({
        title: "Blog RSS",
        description: "Latest blog posts",
        site:
            context.site?.toString(),
            items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.publishedAt,
            link: `/post/${post.data.slug ?? post.slug}/`,
            categories: post.data.tags,
        })),
    });
}