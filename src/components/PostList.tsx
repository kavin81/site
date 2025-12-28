import type { CollectionEntry } from "astro:content";
import { SiRss } from "react-icons/si";

import clsx from "clsx";

interface PostListProps {
    posts: CollectionEntry<"posts">[];
    page?: number;
    postsPerPage?: number;
}

export default function PostList({
    posts,
    page = 1,
    postsPerPage = 0,
}: PostListProps) {
    // fetch most recent posts
    const sortedPosts = posts
        .filter(post => post.data.publishedAt <= new Date())
        .sort(
            (a, b) =>
                b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
        );

    // pagination logic
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    // date logic
    function formatPublishedDate(date: Date) {
        const day = date.toLocaleDateString("en-US", { day: "2-digit" });
        const month = date
            .toLocaleDateString("en-US", { month: "short" })
            .toUpperCase();
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    return (
        <div>
            <div className="flex items-baseline justify-between">
                <h1 className="pb-3">Latest Posts</h1>

                <a href="/feed.atom" aria-label="RSS Feed">
                    <SiRss
                        className={clsx(
                            "text-amber-500/90 hover:animate-pulse",
                        )}
                    />
                </a>
            </div>
            <div className="mt-1 mb-8 h-px bg-white/20" aria-hidden="true" />
            {/* <hr/> */}
            <ul className="space-y-1 list-disc pl-4">
                {paginatedPosts.map(post => (
                    <li
                        key={post.slug}
                        className="marker:text-[#686666] list-star"
                    >
                        <a
                            href={`/post/${post.slug}`}
                            className={clsx(
                                "block rounded-sm border border-transparent",
                                "px-3 py-2 transition-colors",
                                "hover:bg-white/10 hover:border-border",
                            )}
                        >
                            <p className="grid grid-cols-[1fr_auto] gap-4 items-center">
                                <span
                                    className={clsx(
                                        "font-ibm-plex-sans text-lg",
                                        "break-keep wrap-normal",
                                    )}
                                >
                                    {post.data.title}
                                </span>

                                <span className="font-fira-code text-[#686666] tracking-tighter whitespace-nowrap">
                                    [
                                    {formatPublishedDate(post.data.publishedAt)}
                                    ]
                                </span>
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
