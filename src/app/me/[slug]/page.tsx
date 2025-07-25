import React from 'react'
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import slugify from 'slugify';
import NavBar from '@/components/me/NavBar';
import Post from '@/components/me/Post';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";

type PostPageProps = {
  params: {
    slug: string;
  }
}

function getPostContent(slug: string): GrayMatterFile<string> | null {
  const file = `src/app/me/posts/${slug}.md`;
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
  } catch (err) {
    return null;
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync('src/app/me/posts');

  const paths = files.map(file => {
    const content = fs.readFileSync(`src/app/me/posts/${file}`, 'utf-8');
    const { data } = matter(content);
    const slug = slugify(data.title, { lower: true, strict: true });

    return { slug };
  });

  return paths;
}

function PostPage({ params }: PostPageProps) {
  const post = getPostContent(params.slug);
  return (
    <>
      {post ? (
          <Post post={post} />
      ) : (
        <>
          <section id="allPosts" className="min-h-[40vh] bg-bk4 pt-20 pb-24 dark:bg-bk2 md:pt-28">
            <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 text-center text-bk1 dark:text-bk4 ">
              Post not found. <br />
              <Link href="/me" className='inline-flex items-center mt-6 px-4 py-2 text-bk1 dark:text-bk4 rounded-xl transition-colors'><ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts.</Link>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  )
}

export default PostPage;