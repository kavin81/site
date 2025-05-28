export const runtime = 'edge';


import { notFound } from "next/navigation";
import { posts } from "@/data";
import Image from "next/image";

import "@/css/post/main.css";

interface PostProps {
    params: Promise<{ slug: string }>;
}

function getPostBySlug(slug: string) {
    return posts.find(post => post.slug === slug);
}

export default async function PostPage({ params }: PostProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (post == null) return notFound();

    post.publishedAt = new Date(post.publishedAt);

    // Helper: returns true if publishedAt is more than 2 years ago
    function isOlderThan2Years(date: Date) {
        const now = new Date();
        const twoYearsAgo = new Date(now.getFullYear() - 2, now.getMonth(), now.getDate());
        return date < twoYearsAgo;
    }

    // Helper: returns human readable relative time (e.g. '2 years ago')
    function timeAgo(date: Date) {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);
        if (years > 0) return years + (years === 1 ? " year" : " years") + " ago";
        if (months > 0) return months + (months === 1 ? " month" : " months") + " ago";
        if (days > 0) return days + (days === 1 ? " day" : " days") + " ago";
        if (hours > 0) return hours + (hours === 1 ? " hour" : " hours") + " ago";
        if (minutes > 0) return minutes + (minutes === 1 ? " minute" : " minutes") + " ago";
        return "just now";
    }

    return (
        <>
            {post && (
                <article className="prose lg:prose-lg dark:prose-invert py-6">
                    <h1 className="mb-2 mt-8 text-3xl">{post.title}</h1>

                    <p>{post.desc}</p>
                    <br />
                    <figure className="thumbnail_img">
                        <Image
                            src={post.thumbnail.src}
                            alt={post.thumbnail.alt}
                            placeholder="blur"
                        />
                        <figcaption className="text-sm text-gray-500 dark:text-gray-400">
                            Image by{" "}
                            <a href={post.thumbnail.credit.url}>
                                {post.thumbnail.credit.name}
                            </a>
                        </figcaption>

                        {isOlderThan2Years(post.publishedAt) && (
                            <>
                                <br />
                                <div className="markdown-alert markdown-alert-warning article-age-warning">
                                    <p className="markdown-alert-title">
                                        <svg
                                            strokeLinejoin="round"
                                            className="w-4 h-4 text-[#f2a20d]"
                                            viewBox="0 0 16 16"
                                            overflow="visible"
                                            width="16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </p>
                                    <p>
                                        This article is{" "}
                                        <strong>
                                            {new Date().getFullYear() - post.publishedAt.getFullYear()} yrs
                                        </strong>{" "}
                                        old. Some info might be outdated.
                                    </p>
                                </div>
                            </>
                        )}
                    </figure>

                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            )}

            {post && (
                <div className="updated_at">
                    {post.updatedAt ? (
                        <p>
                            Last updated on
                            {post.updatedAt &&
                                new Date(post.updatedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                        </p>
                    ) : (
                        <p>
                            {timeAgo(post.publishedAt)} since last update
                        </p>
                    )}
                </div>
            )}
            {post && post.tags && (
                <div className="tags">
                    {post.tags.map(tag => (
                        <a className="tag" key={tag}>
                            {tag}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}

// export function generateStaticParams() {
//     return posts.map(post => ({ slug: post.slug }));
// }
