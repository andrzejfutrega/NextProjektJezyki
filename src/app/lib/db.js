import { createClient } from '@vercel/blob';

const blob = createClient({
    token: process.env.BLOB_READ_WRITE_TOKEN,
});

const POSTS_BLOB_NAME = 'posts.json';

// Inicjalna struktura danych
const initialData = {
    posts: []
};

export async function getAllPosts() {
    try {
        // Próba pobrania pliku JSON z Blob Storage
        const { blob: postsBlob } = await blob.get(POSTS_BLOB_NAME);
        
        if (!postsBlob) {
            // Jeśli nie ma pliku, utwórz go z początkową strukturą
            await blob.put(POSTS_BLOB_NAME, JSON.stringify(initialData), {
                access: 'public',
            });
            return [];
        }
        
        const text = await postsBlob.text();
        const data = JSON.parse(text);
        return data.posts || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function createPost(post) {
    try {
        // Pobierz aktualne posty lub utwórz nową strukturę
        let data;
        try {
            const { blob: postsBlob } = await blob.get(POSTS_BLOB_NAME);
            const text = await postsBlob.text();
            data = JSON.parse(text);
        } catch (error) {
            data = initialData;
        }

        if (!data.posts) {
            data.posts = [];
        }
        
        // Znajdź najwyższe ID
        const maxId = data.posts.reduce((max, p) => Math.max(max, p.id), 0);
        
        // Dodaj nowy post
        const newPost = {
            id: maxId + 1,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            categories: post.categories
        };
        
        data.posts.push(newPost);
        
        // Zapisz zaktualizowaną listę postów
        await blob.put(POSTS_BLOB_NAME, JSON.stringify(data, null, 2), {
            access: 'public',
        });

        return newPost;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
} 