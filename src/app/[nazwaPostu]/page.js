import postsData from '../data/posts.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllPosts } from '../lib/db';

export default async function Post({ params }) {
  const posts = await getAllPosts();
  const post = posts.find(
    post => post.slug === params.nazwaPostu
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="relative w-full h-[400px] mb-6">
        <Image
          src="/images/defaultpost.jpg"
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="prose max-w-none">
        {post.content}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    nazwaPostu: post.slug,
  }));
}
