// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/"><img src="/images/logo.jpg" alt="Logo" style={{ width: '50px' }} /></Link>
        
        <nav>
          <Link href="/about">About Us</Link> | 
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
