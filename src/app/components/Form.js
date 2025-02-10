"use client";
import { useState } from "react";

export default function Form({ addPost }) {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const filePath = '/home/artur/Desktop/NextProjektJezyki/src/app/data/posts.json'

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const generateNextId = () => {
        try {
            if (fs.existsSync(filePath)) {
                const data = fs.readFileSync(filePath, 'utf8');
                const posts = JSON.parse(data);
                if (posts.length === 0) {
                    return 1;
                }
                const lastId = Math.max(...posts.map(post => post.id));
                return lastId + 1;
            } else {
                return 1;
            }
        } catch (error) {
            console.error('Błąd podczas generowania ID:', error);
            return 1;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = generateSlug(title);

        const newPost = {
            id: generateNextId(),
            title,
            slug,
            excerpt,
            content,
        };

        try {
            await addPost(newPost);
            alert("Post został dodany!");
            setTitle("");
            setExcerpt("");
            setContent("");
        } catch (err) {
            setError("Błąd podczas zapisywania posta.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Dodaj nowy post</h1>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Tytuł:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700 focus:text-gray-900" // Added focus color change for text
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Fragment:</label>
                    <input
                        type="text"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700 focus:text-gray-900" // Added focus color change for text
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Treść:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 h-40 text-gray-700 focus:text-gray-900" // Added focus color change for text
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Dodaj post
                </button>
            </form>
        </div>
    );
}
