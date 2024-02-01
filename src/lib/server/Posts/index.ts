import { removeQuotes } from "$lib/utils";

const POSTS_PATH = "./content/posts/"
const POST_NAME_REGEX = /^[0-9]{1,2}_[\S\s]*\.md$/

export function formatPostData(markdown: string) {
    const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);

    // case1: if metadata missing
    if (!match) {
        console.error("No metadata found in post:\n", markdown)
        return {
            metadata: {
                title: "!@$^*&^%$#@!",
                slug: "#",
                unix_time: 0
            }, body: markdown
        };
    }

    // case2: if metadata exists
    const frontmatter = match[1];
    const body = markdown.slice(match[0].length);

    const metadata: any = {};
    // frontmatter data -> js object
    frontmatter.split('\n').forEach((pair) => {
        const [key, value] = pair.split(':').map((str) => str.trim());
        metadata[key] = removeQuotes(value);
    });

    return { metadata, body };
}


interface _AllPostDataType {
    title: string,
    slug: string,
    unix_time: number,
    body: string
}
type AllPostDataType = _AllPostDataType[]

export async function getAllPosts(n: number): Promise<AllPostDataType> {
    const { readdir, readFile } = await import("node:fs/promises");

    const PostData = [];


    for (const file of (await readdir(POSTS_PATH))) {

        // condition(s)
        if (PostData.length >= n) break;
        console.log(PostData.length, n )
        if (!POST_NAME_REGEX.test(file)) continue;

        // frontmatter and markdown extractor
        const { metadata, body } = formatPostData(await readFile(`${POSTS_PATH}${file}`, "utf-8"))

        // push to array `PostData` on each loop
        PostData.push({
            title: metadata.title,
            slug: file.replace(/\.md$/, ''),
            unix_time: metadata.unix_time,
            body
        });
    }
    // return array after loop
    return PostData
}

// returns only the metadata of the posts for the home/blog page
export async function getPartialPosts(n: number) {
    let post_data = await getAllPosts(n);
    return post_data.map(({ title, slug, unix_time }) => ({
        title,
        slug,
        unix_time:Number(unix_time)
    }));
}

// stub
export async function getPost(slug: string) {
    return null;
}
