import Link from "next/link";
import { posts } from "@/data";
import Image from "next/image";

export default function BlogFeed() {
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
            <div className="flex flex-col gap-8">
                {posts
                    .sort(
                        (a, b) =>
                            new Date(b.publishedAt).getTime() -
                            new Date(a.publishedAt).getTime(),
                    )
                    .slice(0, 3)
                    .map(post => (
                        console.log(`slug: ${post.slug}`),
                        <Link
                            key={post.slug}
                            href={`/post/${post.slug}`}
                            className="group flex gap-6 items-center rounded-lg p-4 hover:bg-white/5 transition"
                        >
                            {post.thumbnail?.src?.src && (
                                <Image
                                    src={post.thumbnail.src.src}
                                    alt={post.thumbnail.alt}
                                    width={96}
                                    height={56}
                                    className="rounded-md object-cover w-24 h-14 flex-shrink-0"
                                />
                            )}
                            <div>
                                <h3 className="text-lg font-semibold group-hover:underline">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-white/70 mt-1 line-clamp-2">
                                    {post.desc}
                                </p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {Array.isArray(post.tags)
                                        ? post.tags.map(tag => (
                                              <span
                                                  key={tag}
                                                  className="text-xs bg-white/10 px-2 py-0.5 rounded font-mono"
                                              >
                                                  #{tag}
                                              </span>
                                          ))
                                        : null}
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    );
}
