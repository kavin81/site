// Dynamically loaded post helpers for edge function code splitting

export function getPostBySlug(posts, slug) {
    return posts.find(post => post.slug === slug);
}

export function isOlderThan2Years(date) {
    const now = new Date();
    const twoYearsAgo = new Date(now.getFullYear() - 2, now.getMonth(), now.getDate());
    return date < twoYearsAgo;
}

export function timeAgo(date) {
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
