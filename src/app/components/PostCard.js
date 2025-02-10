// components/PostCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ post }) {
  return (
      <main style={{
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '20px'
      }}>
    <div style={{
        width: '50%',
      borderRadius: '15px',
      backgroundColor: '#f4f4f4',
      marginBottom: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="relative w-full h-[200px] mb-4">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <h2 className='text-black text-lg font-bold'>{post.title}</h2>
      <p className="my-2">{post.excerpt}</p>
      <Link 
        href={`/${post.slug}`}
        className="text-blue-600 hover:text-blue-800"
      >
        Read more...
      </Link>
    </div>
    </main>
  );
}
