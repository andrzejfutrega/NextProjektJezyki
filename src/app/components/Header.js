import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    const categories = ["swiat", "sport", "dieta", "programowanie"];
    const categoryNames = {
        "swiat": "Świat",
        "sport": "Sport",
        "dieta": "Dieta",
        "programowanie": "Programowanie"
    };

    return (
        <nav className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-5">
            <div className="flex flex-col items-start">
                <Link href="/" className="flex items-center space-x-3 group">
                    <Image
                        src="/images/logo.jpg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full transition-transform duration-300 group-hover:scale-110"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Bloggers
                        </span>
                        <span className="text-xs text-gray-400 tracking-wider">
                            Podziel się sobą!
                        </span>
                    </div>
                </Link>
                <ul className="space-y-4 mt-8 w-full">
                    <li>
                        <Link 
                            href="/add" 
                            className="flex items-center px-4 py-2 rounded-lg transition-all duration-300
                                     hover:bg-purple-600 hover:shadow-lg group"
                        >
                            <svg className="w-5 h-5 mr-3 text-purple-400 group-hover:text-white transition-colors" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M12 4v16m8-8H4"/>
                            </svg>
                            <span>Dodaj Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/about" 
                            className="flex items-center px-4 py-2 rounded-lg transition-all duration-300
                                     hover:bg-purple-600 hover:shadow-lg group"
                        >
                            <svg className="w-5 h-5 mr-3 text-purple-400 group-hover:text-white transition-colors" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>O Nas</span>
                        </Link>
                    </li>
                    <li className="pt-6">
                        <span className="px-4 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Kategorie
                        </span>
                        <ul className="mt-3 space-y-1">
                            {categories.map(category => (
                                <li key={category}>
                                    <Link 
                                        href={`/category/${category}`}
                                        className="flex items-center px-4 py-2 rounded-lg transition-all duration-300
                                                 hover:bg-purple-600 hover:shadow-lg group"
                                    >
                                        <svg className="w-4 h-4 mr-3 text-purple-400 group-hover:text-white transition-colors" 
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                        </svg>
                                        <span>{categoryNames[category]}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
