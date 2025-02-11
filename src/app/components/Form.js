"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Form({ addPost }) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const categories = [
        { id: "swiat", name: "Świat" },
        { id: "sport", name: "Sport" },
        { id: "dieta", name: "Dieta" },
        { id: "programowanie", name: "Programowanie" }
    ];

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError("Zdjęcie nie może być większe niż 5MB");
                return;
            }
            setImage(file);
            // Tworzenie podglądu zdjęcia
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prev => 
            prev.includes(categoryId)
                ? prev.filter(cat => cat !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = generateSlug(title);

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("slug", slug);
            formData.append("excerpt", excerpt);
            formData.append("content", content);
            formData.append("categories", JSON.stringify(selectedCategories));
            if (image) {
                formData.append("image", image);
            }

            const result = await addPost(formData);
            if (result.success) {
                alert("Post został dodany!");
                // Przekierowanie do nowego posta
                router.push(`/${slug}`);
            } else {
                setError(result.message || "Wystąpił błąd podczas dodawania posta.");
            }
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700 focus:text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Fragment:</label>
                    <input
                        type="text"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700 focus:text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Zdjęcie:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                    {imagePreview && (
                        <div className="mt-2">
                            <img
                                src={imagePreview}
                                alt="Podgląd"
                                className="max-h-40 rounded-lg"
                            />
                        </div>
                    )}
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Treść:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 h-40 text-gray-700 focus:text-gray-900"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Kategorie:</label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <label key={category.id} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category.id)}
                                    onChange={() => handleCategoryChange(category.id)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">{category.name}</span>
                            </label>
                        ))}
                    </div>
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
