// pages/index.js    </div>
import PostCard from './components/PostCard.js';
import postsData from './data/posts.json';

export default function Home() {
  return (
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
  );
}
