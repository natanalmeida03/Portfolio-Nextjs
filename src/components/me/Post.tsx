import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { GrayMatterFile } from 'gray-matter';

type PostProps = {
  post: GrayMatterFile<string>;
};

function Post({ post }: PostProps) {
  return (
    <section id="allPosts" className="min-h-[40vh] bg-bk4 pt-20 pb-24 dark:bg-bk2 md:pt-28">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16 bg-bk4 dark:bg-bk2 min-h-[40vh]">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{post.data.title}</h1>
          <p className="text-sm text-pk dark:text-bk4 ">
            {post.data.date && ` ${post.data.date}`} <br />
            {post.data.update && ` (Last updated: ${post.data.update})`}
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

          <p className='text-sm text-pk dark:text-bk4 mt-16 font-semibold text-right'>
            {post.data.author && `Written by ${post.data.author}.`}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Post;
