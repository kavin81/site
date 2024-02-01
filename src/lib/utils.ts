export function formatPartialPost(data: { title: string; slug: string; unix_time: number }) {
    let date = new Date(data.unix_time * 1000);
    let fdate = `${date.toLocaleString('en-us', {
        month: 'short'
    })} ${date.getDate()}, ${date.getFullYear()}`;

    return {
        title: data.title,
        url: '/blog/' + data.slug,
        timestamp: fdate
    };
}

export function removeQuotes(str:string){
    return str.replace(/(^["']|["']$)/g, '');
}