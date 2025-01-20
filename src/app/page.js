// pages/index.js
import Link from 'next/link';
import PostCard from './/components/PostCard.js';

const posts = [
  { id: 1, title: 'Pierwszy Post', imageUrl: '/images/post1.jpg', excerpt: 'To jest fragment pierwszego posta.' },
  { id: 2, title: 'Drugi Post', imageUrl: '/images/post2.jpg', excerpt: 'To jest fragment drugiego posta.' },
  // Możesz dodać więcej postów
];

export default function Home() {
  return (
    <div>
     

      <main style={{ padding: '20px' }}>
        <h1>Blog</h1>
        <div>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
