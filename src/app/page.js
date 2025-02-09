// pages/index.js
import Link from 'next/link';
import PostCard from './components/PostCard.js';
import postsData from './data/posts.json';

export default function Home() {
  return (
    <div>
     

      <main style={{ padding: '20px' }}>
        <h1>Blog</h1>
        <div>
          {postsData.posts.map(post => (
            <PostCard 
              key={post.id} 
              post={{
                ...post,
                imageUrl: `/images/posts/${post.slug}.jpg`
              }} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
