"use server";
import { put } from '@vercel/blob';
import { createPost } from '../lib/db';

export async function addPost(formData) {
    try {
        // Obsługa przesyłania obrazu do Vercel Blob
        const image = formData.get("image");
        let imageUrl = null;
        
        if (image) {
            const blob = await put(`posts/${formData.get("slug")}-${Date.now()}.jpg`, image, {
                access: 'public',
                addRandomSuffix: true
            });
            imageUrl = blob.url;
        }

        // Tworzenie nowego posta
        const newPost = {
            title: formData.get("title"),
            slug: formData.get("slug"),
            excerpt: formData.get("excerpt"),
            content: formData.get("content"),
            categories: JSON.parse(formData.get("categories") || "[]"),
            image_url: imageUrl || '/images/defaultpost.jpg',
            created_at: new Date().toISOString()
        };

        const createdPost = await createPost(newPost);
        return { success: true, post: createdPost };
    } catch (error) {
        console.error("Błąd zapisu posta:", error);
        return { success: false, message: "Nie udało się zapisać posta." };
    }
}
