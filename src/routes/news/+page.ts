import type { PageLoad } from './$types';
import { posts } from '$lib/posts';

export const load: PageLoad = () => {
    // We only want to show a few posts on the homepage
    const featuredPosts = posts.slice(0, 3).map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: post.date,
        time: post.time,
        episode: post.episode,
        author: post.author,
        alt: post.alt
    }));

    return {
        posts: featuredPosts
    };
};