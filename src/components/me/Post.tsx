"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import readingTime from 'reading-time';
import { GrayMatterFile } from 'gray-matter';
import { ArrowLeft, Share } from "lucide-react";
import { useRouter } from 'next/navigation';

type PostProps = {
  post: GrayMatterFile<string>;
};

function Post({ post }: PostProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const time = readingTime(post.content);
  const readTime = `${Math.ceil(time.minutes)} min read`;

  return (
    <section id="allPosts" className="min-h-[40vh] bg-bk4 pb-24 dark:bg-bk2 pt-6 md:pt-10">
      <article className="max-w-3xl mx-auto px-6 pb-4 bg-bk4 dark:bg-bk2 min-h-[40vh]">
        <div>
          <button onClick={() => router.back()} className="inline-flex items-center mb-6 pr-4 text-yll rounded-xl dark:text-bk4 ">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h1>{post.data.title}</h1>
          <p className="text-sm text-pk dark:text-bk4 ">
            {post.data.date && ` ${post.data.date}`} <br />
            {post.data.update && ` (Last updated: ${post.data.update})`}
          </p>
          <p className="text-sm text-pk dark:text-bk4 ">
             {readTime}
          </p>
          <hr className="mb-12" />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              iframe: ({ node, ...props }) => (
                <div className="aspect-video">
                  <iframe {...props} className="w-full h-full" />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>

          {/* <p className='text-sm text-pk dark:text-bk4 mt-16 font-semibold text-right'>
            {post.data.author && `Written by ${post.data.author}.`}
          </p> */}
        </div>
        <hr className='my-6 text-yll/40 dark:text-bk4/40' />
        <div className="flex items-center gap-2 flex-wrap">
          {Array.isArray(post.data.tags) && post.data.tags.length > 0 && (
            post.data.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-y/80 text-xs font-bold text-white"
              >
                {tag}
              </span>
            ))
          )}
          {copied ? (
            <span className="ml-auto text-xs text-pk dark:text-bk4 animate-fade-in">Copied!</span>
          ) : (
            <button
              type="button"
              className="ml-auto p-2 transition"
              title="share"
              aria-label="Share"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.data.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }
              }}
            >
              <Share className="w-5 h-5 text-yll dark:text-bk4" />
            </button>
          )}
        </div>
      </article>
    </section>
  );
}

export default Post;
