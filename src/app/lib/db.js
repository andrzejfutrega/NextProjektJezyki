import { list, put, get } from '@vercel/blob';

const POSTS_BLOB_NAME = 'posts.json';

export async function getAllPosts() {
    try {
        // Próba pobrania pliku JSON z Blob Storage
        const blob = await get(POSTS_BLOB_NAME);
        if (!blob) {
            return [];
        }
        const text = await blob.text();
        const data = JSON.parse(text);
        return data.posts || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function createPost(post) {
    try {
        // Pobierz aktualne posty
        const currentPosts = await getAllPosts();
        
        // Znajdź najwyższe ID
        const maxId = currentPosts.reduce((max, p) => Math.max(max, p.id), 0);
        
        // Dodaj nowy post
        const newPost = {
            ...post,
            id: maxId + 1
        };
        
        currentPosts.push(newPost);
        
        // Zapisz zaktualizowaną listę postów
        await put(POSTS_BLOB_NAME, JSON.stringify({ posts: currentPosts }), {
            access: 'public',
        });

        return newPost;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
} 