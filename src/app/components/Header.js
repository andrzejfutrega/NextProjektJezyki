import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    return (
            <nav className="w-64 p-5 bg-gray-800 text-white">
                <div className="flex flex-col items-start">
                    <Link href="/">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="rounded-full"
                            priority
                        />
                    </Link>
                    <ul className="space-y-4 mt-6">
                        <li><Link href="/add">Add Post</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
    );
}
