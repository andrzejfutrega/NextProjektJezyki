// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '50px' }} />
        <nav>
          <Link href="/about">About Us</Link> | 
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
