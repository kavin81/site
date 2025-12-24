import type { CollectionEntry } from "astro:content";

interface PostListProps {
    posts: CollectionEntry<"posts">[];
    page?: number;
    postsPerPage?: number;
}

export default function PostList({
    posts,
    page = 1,
    postsPerPage = 5,
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

    return (
        <ul>
            {paginatedPosts.map(post => (
                <li key={post.slug}>
                    <a href={`/post/${post.slug}`}>
                        <p style={{ textDecoration: "none", color: "black" }}>
                            {post.data.title} |{" "}
                            {post.data.publishedAt.toLocaleDateString()}
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    );
}
