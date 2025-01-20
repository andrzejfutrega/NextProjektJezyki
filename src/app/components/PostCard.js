// components/PostCard.js
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div style={{ 
      borderRadius: '15px', 
      backgroundColor: '#f4f4f4', 
      marginBottom: '20px', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src={post.imageUrl} alt={post.title} style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
      <h2 className='text-lg'>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link href={`/post/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
        Read more...
      </Link>
    </div>
  );
}
