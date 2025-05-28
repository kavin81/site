"use client";

import { useState, useMemo, useRef } from "react";
import { posts as allPosts } from "@/data";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";

// Fuzzy search config
const fuseOptions = {
    keys: ["title", "desc", "tags"],
    threshold: 0.35,
    includeScore: true,
};

const SORT_OPTIONS = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
];

const POSTS_PER_PAGE = 10;

export default function PostsPage() {
    const [sort, setSort] = useState("newest");
    const [search, setSearch] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [page, setPage] = useState(1);
    const inputRef = useRef<HTMLInputElement>(null);

    const fuse = useMemo(() => new Fuse(allPosts, fuseOptions), []);

    // Suggestions for dropdown
    const suggestions = useMemo(() => {
        if (!search) return [];
        return fuse
            .search(search)
            .slice(0, 5)
            .map(result => result.item);
    }, [search, fuse]);

    /* eslint-disable react-hooks/exhaustive-deps */
    const filteredPosts = useMemo(() => {
        let filtered = search
            ? fuse.search(search).map(result => result.item)
            : allPosts;
        filtered = filtered.slice().sort((a, b) => {
            const aDate = new Date(a.publishedAt).getTime();
            const bDate = new Date(b.publishedAt).getTime();
            return sort === "newest" ? bDate - aDate : aDate - bDate;
        });
        return filtered;
    }, [search, sort, fuse, allPosts]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, page]);

    useMemo(() => {
        setPage(1);
    }, [search, sort]);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function handleSuggestionClick(post: any) {
        setSearch(post.title);
        setShowSuggestions(false);
        inputRef.current?.blur();
    }

    return (
        <section className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold">All Posts</h2>
                <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search posts..."
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() =>
                            setTimeout(() => setShowSuggestions(false), 120)
                        }
                        className="px-3 py-2 rounded bg-black border border-white/10 text-white font-mono w-full sm:w-64 focus:outline-none focus:border-white/30 transition"
                        aria-label="Search posts"
                        autoComplete="off"
                    />
                    {/* Suggestions dropdown */}
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="absolute z-10 top-12 left-0 w-full bg-black border border-white/10 rounded shadow-lg max-h-56 overflow-auto">
                            {suggestions.map(post => (
                                <li
                                    key={post.slug}
                                    className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white"
                                    onMouseDown={() =>
                                        handleSuggestionClick(post)
                                    }
                                >
                                    <span className="font-semibold">
                                        {post.title}
                                    </span>
                                    <span className="ml-2 text-xs text-white/50">
                                        {post.desc.slice(0, 40)}...
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <select
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                        className="px-3 py-2 rounded bg-black border border-white/10 text-white font-mono"
                        aria-label="Sort posts"
                    >
                        {SORT_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {paginatedPosts.length === 0 && (
                    <div className="text-center text-white/60 py-12 font-mono">
                        No posts found.
                    </div>
                )}
                {paginatedPosts.map(post => (
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
                        <div className="ml-auto text-xs text-white/40 font-mono hidden xs:block">
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                    </Link>
                ))}
            </div>
            {/* Pagination controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                        className="px-3 py-1 rounded bg-white/10 text-white font-mono disabled:opacity-40"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-3 py-1 rounded font-mono ${
                                page === i + 1
                                    ? "bg-white/20 text-white"
                                    : "bg-white/10 text-white/70"
                            }`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="px-3 py-1 rounded bg-white/10 text-white font-mono disabled:opacity-40"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}
