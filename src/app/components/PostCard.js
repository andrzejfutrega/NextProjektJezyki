// components/PostCard.js
import Link from 'next/link';
import Image from 'next/image';
import { existsSync } from 'fs';
import path from 'path';

export default function PostCard({ post, isLarge }) {
  // Sprawdzanie czy istnieje zdjęcie dla posta
  const getImagePath = () => {
    const postImagePath = `/images/posts/${post.slug}.jpg`;
    const defaultImagePath = '/images/defaultpost.jpg';
    
    // Sprawdź czy plik istnieje w public/images/posts
    const fullPath = path.join(process.cwd(), 'public', 'images', 'posts', `${post.slug}.jpg`);
    return existsSync(fullPath) ? postImagePath : defaultImagePath;
  };

  return (
    <div className={`
      bg-white rounded-xl shadow-lg overflow-hidden
      transition-all duration-300 hover:shadow-xl
      ${isLarge ? 'h-full' : ''}
    `}>
      <div className={`relative w-full ${isLarge ? 'h-[400px]' : 'h-[200px]'}`}>
        <Image
          src={post.image_url || '/images/defaultpost.jpg'}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-xl hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      
      <div className="p-6">
        <h2 className={`font-bold mb-3 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {post.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories?.map(category => (
            <span 
              key={category}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
        <p className={`text-gray-600 mb-4 ${isLarge ? 'text-lg' : 'text-base'}`}>
          {post.excerpt}
        </p>
        
        <Link 
          href={`/${post.slug}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg
            hover:bg-blue-700 transition-colors duration-200
            transform hover:-translate-y-1"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
