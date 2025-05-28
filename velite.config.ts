import { defineConfig, defineCollection, s } from "velite";
import { rehypePrettyCode, type Options } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { rehypeGithubAlerts, type IOptions } from "rehype-github-alerts";
import fs from "fs";
import path from "path";

const syntaxTheme = JSON.parse(
    fs.readFileSync("./public/seti-black.json", "utf-8"),
);

function removeLowerCaseDups(array: string[]) {
    return [...new Set(array.map(str => str.toLowerCase()))];
}

const posts = defineCollection({
    name: "posts",
    pattern: "posts/**/*.md",
    schema: s
        .object({
            title: s.string().max(80),
            desc: s.string().max(200),

            publishedAt: s.string().transform(str => new Date(str)),
            updatedAt: s
                .string()
                .optional()
                .transform(str => (str ? new Date(str) : undefined)),

            thumbnail: s.object({
                src: s.image(),
                alt: s.string(),
                credit: s.object({
                    name: s.string().transform(val =>
                        val
                            .split(" ")
                            .map(
                                word =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1),
                            )
                            .join(" "),
                    ),
                    url: s.string().url(),
                }),
            }),
            tags: s
                .string()
                .transform(val =>
                    removeLowerCaseDups(val.split(",").map(tag => tag.trim())),
                ),
            content: s.markdown(),
        })
        .transform((data, { meta }) => {
            const basename =
                typeof meta.path === "string" ? meta.path : undefined;

            const filename = basename?.split(path.sep).pop() ?? "";

            const dirname =
                basename?.split(path.sep).slice(0, -1).join("/") ?? "";

            const slug =
                filename === "index.md"
                    ? dirname.split("/").pop() ?? ""
                    : filename.split(".").slice(0, -1).join(".");

            return {
                ...data,
                slug: slug,
            };
        }),
});

const projects = defineCollection({
    name: "projects",
    pattern: "projects/**/*.md",
    schema: s.object({
        title: s.string().max(80),
        desc: s.string().max(200),
        publishedAt: s.string().transform(str => new Date(str)),

        updatedAt: s
            .string()
            .optional()
            .transform(str => (str ? new Date(str) : undefined)),
        thumbnail: s.object({
            src: s.image(),
            alt: s.string(),
            credit: s.object({
                name: s.string().transform(val =>
                    val
                        .split(" ")
                        .map(
                            word =>
                                word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" "),
                ),
                url: s.string().url(),
            }),
        }),
        tags: s
            .string()
            .transform(val =>
                removeLowerCaseDups(val.split(",").map(tag => tag.trim())),
            ),
        content: s.markdown(),
        github: s.string().url(),
        demo: s
            .string()
            .optional()
            .transform(val => (val ? val.trim() : undefined)),
    }),
});
const config = defineConfig({
    root: "content",
    output: {
        data: "data",
        clean: true,
    },
    collections: {
        posts,
        projects,
    },
    markdown: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: syntaxTheme,
                    transformers: [
                        transformerCopyButton({
                            visibility: "hover",
                            feedbackDuration: 3_000,
                            copyIcon:
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='24' shape-rendering='geometricPrecision' stroke='%23d7d7d7' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' viewBox='0 0 24 24' width='24' aria-hidden='true' style='color:currentColor;width:20px;height:20px'\
                                %3E%3Cpath d='M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z'%3E%3C/path\
                            %3E%3C/svg%3E",
                            successIcon:
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='24' shape-rendering='geometricPrecision' stroke='%231a9338' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' viewBox='0 0 24 24' width='24' aria-hidden='true' style='color:currentColor;width:20px;height:20px'\
                                %3E%3Cpath d='M20 6L9 17l-5-5'%3E%3C/path\
                            %3E%3C/svg%3E",
                        }),
                    ],
                } satisfies Options,
            ],
            [
                rehypeGithubAlerts,
                {
                    alerts: [
                        {
                            keyword: "NOTE",
                            icon: '<svg height="16" stroke-linejoin="round" style="color:#52a8ff" viewBox="0 0 16 16" width="16"overflow="visible" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="currentColor"></path></svg>',
                            title: "",
                        },
                        {
                            keyword: "IMPORTANT",
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bf7af0" viewBox="0 0 16 16" overflow="visible"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>',
                            title: "",
                        },
                        {
                            keyword: "WARNING",
                            icon: '<svg height="16" stroke-linejoin="round" style="width:16px;height:16px;color:#f2a20d" viewBox="0 0 16 16" overflow="visible" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z" fill="currentColor"></path></svg>',
                            title: "",
                        },
                        {
                            keyword: "TIP",
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#62c073" overflow="visible" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/></svg>',
                            title: "",
                        },
                        {
                            keyword: "CAUTION",
                            icon: '<svg  height="16" stroke-linejoin="round" style="width:16px;height:16px;color:#ff6166" viewBox="0 0 16 16" overflow="visible" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.30761 1.5L1.5 5.30761L1.5 10.6924L5.30761 14.5H10.6924L14.5 10.6924V5.30761L10.6924 1.5H5.30761ZM5.10051 0C4.83529 0 4.58094 0.105357 4.3934 0.292893L0.292893 4.3934C0.105357 4.58094 0 4.83529 0 5.10051V10.8995C0 11.1647 0.105357 11.4191 0.292894 11.6066L4.3934 15.7071C4.58094 15.8946 4.83529 16 5.10051 16H10.8995C11.1647 16 11.4191 15.8946 11.6066 15.7071L15.7071 11.6066C15.8946 11.4191 16 11.1647 16 10.8995V5.10051C16 4.83529 15.8946 4.58093 15.7071 4.3934L11.6066 0.292893C11.4191 0.105357 11.1647 0 10.8995 0H5.10051ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="currentColor"></path></svg>',
                            title: "",
                        },
                    ],
                    supportLegacy: false,
                } satisfies IOptions,
            ],
        ],
        gfm: true,
    },
});

export default config;
