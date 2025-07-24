"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';

type Post = {
    slug: string;
    title?: string;
    date?: string;
    tags?: string[];
};

type PostsProps = {
    search: string;
};

const PostItem = ({ post }: { post: Post }) => (
    <li className="border-b border-bk2/20 dark:border-bk4/30 last:border-none">
        <Link href={`/me/${post.slug}`} className="block py-6">
        <h3 className="text-xl font-semibold text-pk dark:text-white">
            {post.title ?? post.slug}
        </h3>
        <div className="mt-2 flex items-center text-sm text-bk1 dark:text-bk3">
            <span>{post.date ?? ''}</span>
        </div>
        {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map(tag => (
                <span
                key={tag}
                className="px-2 py-0.5 rounded bg-y/80 text-xs font-bold text-white"
                >
                {tag}
                </span>
            ))}
            </div>
        )}
        </Link>
    </li>
);

function Posts({ search }: PostsProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts ?? []))
        .catch(() => setPosts([]))
        .finally(() => setIsLoading(false));
    }, []);

    const sortedAndFilteredPosts = useMemo(() => {
        const searchLower = search.toLowerCase();
        return posts
        .filter(post => 
            post.title?.toLowerCase().includes(searchLower) || 
            post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
        )
        .toSorted((a, b) => {
            if (!a.date || !b.date) return 0;
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });
    }, [posts, search, sortOrder]);

    const renderContent = () => {
        if (isLoading) {
            return <p className="text-center text-gray-700 dark:text-gray-300">Loading posts...</p>;
        }
        if (posts.length === 0) {
            return <p className="text-center text-gray-700 dark:text-gray-300">No posts yet.</p>;
        }
        if (sortedAndFilteredPosts.length === 0) {
            return <p className="text-center text-gray-700 dark:text-gray-300">No results found for {search}.</p>;
        }
        return (
            <ul className="flex flex-col">
                {sortedAndFilteredPosts.map(post => <PostItem key={post.slug} post={post} />)}
            </ul>
        );
    };

  return (
    <section id="allPosts" className="min-h-[40vh] bg-bk4 pt-20 pb-24 dark:bg-bk2 md:pt-28">
        <div className="mx-auto max-w-3xl px-6">
            <div>
            <h2 className="text-3xl font-bold text-pk dark:text-white">All posts</h2>
            {posts.length > 0 && (
                <div className="mt-4 flex items-center gap-4 text-sm">
                    <button onClick={() => setSortOrder("newest")} className={sortOrder === 'newest' ? 'font-bold text-pk dark:text-white' : 'text-bk1 dark:text-bk3'}>
                    Newest
                    </button>
                    <span className="text-bk1 dark:text-bk3">|</span>
                    <button onClick={() => setSortOrder("oldest")} className={sortOrder === 'oldest' ? 'font-bold text-pk dark:text-white' : 'text-bk1 dark:text-bk3'}>
                    Oldest
                    </button>
                </div>
            )}
            </div>
            
            <div className="mt-8">
            {renderContent()}
            </div>
        </div>
    </section>
  );
}

export default Posts;