const TARGET_DOMAIN = "kavin1.vercel.app"

export const onRequestGet = ({ request }) => {
    const url = new URL(request.url)
    const path = url.pathname
    const search = url.search
    return Response.redirect(`https://${TARGET_DOMAIN}${path}${search}`, 301)
}
