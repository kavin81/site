export const prerender = true;

import { getPartialPosts } from "$lib/server/Posts"
export async function load({ params }) {
    return { body: await getPartialPosts(4)}
}
