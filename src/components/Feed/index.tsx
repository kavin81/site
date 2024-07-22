import type React from "react";
import "./styles.css";
import { getCollection } from "astro:content";

const posts = await getCollection("blog").then((collection) => {
    return collection
        .sort(
            (a, b) =>
                b.data.publishedAt.getTime() - a.data.publishedAt.getTime() // sort by most recent
        )
        .slice(0, 3); // only first 3 posts
});

function Feed() {
    const handlePostClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        const url = event.currentTarget.getAttribute("data-slug");
        window.location.href = `/blog/${url}`;
    };
    return (
        <div>
            <div className="feed">
                <h2>Recent Posts</h2>
                <ul>
                    {posts.map((post) => (
                        <li onClick={handlePostClick} data-slug={post.slug}>
                            <div className="tags">
                                {post.data.tags.map((tag) => (
                                    <a className="tag" href={`/tags/${tag}`}>
                                        #{tag}
                                    </a>
                                ))}
                            </div>
                            <div className="snippet">
                                <h3>{post.data.title}</h3>
                                <p>{post.data.desc}</p>
                            </div>
                            <div className="metadata">
                                <span>
                                    <svg
                                        height="16"
                                        strokeLinejoin="round"
                                        viewBox="0 0 16 16"
                                        width="16"
                                        style={{ color: "currentcolor" }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>{" "}
                                    {post.data.publishedAt.toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        }
                                    )}{" "}
                                </span>

                                <span>
                                    <svg
                                        height="16"
                                        strokeLinejoin="round"
                                        viewBox="0 0 16 16"
                                        width="16"
                                        style={{ color: " currentcolor" }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.75V4H7.25V4.75V7.875C7.25 8.18976 7.39819 8.48615 7.65 8.675L9.55 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75 7.625V4.75Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    {1} min read
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Feed;
