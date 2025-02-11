import postsData from '../data/posts.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { existsSync } from 'fs';
import path from 'path';

export default function Post({ params }) {
  const post = postsData.posts.find(
    post => post.slug === params.nazwaPostu
  );

  if (!post) {
    notFound();
  }

  // Sprawdzanie czy istnieje zdjęcie dla posta
  const getImagePath = () => {
    const postImagePath = `/images/posts/${post.slug}.jpg`;
    const defaultImagePath = '/images/defaultpost.jpg';
    
    // Sprawdź czy plik istnieje w public/images/posts
    const fullPath = path.join(process.cwd(), 'public', 'images', 'posts', `${post.slug}.jpg`);
    return existsSync(fullPath) ? postImagePath : defaultImagePath;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="relative w-full h-[400px] mb-6">
        <Image
          src={getImagePath()}
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

export function generateStaticParams() {
  return postsData.posts.map((post) => ({
    nazwaPostu: post.slug,
  }));
}
