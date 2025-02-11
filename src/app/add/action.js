"use server";
import fs from "fs";
import path from "path";

export async function addPost(formData) {
    try {
        const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'posts.json');
        
        let postsData = { posts: [] };
        if (fs.existsSync(filePath)) {
            const fileContent = await fs.promises.readFile(filePath, "utf8");
            postsData = fileContent ? JSON.parse(fileContent) : { posts: [] };
        }

        const maxId = postsData.posts.reduce((max, post) => Math.max(max, post.id), 0);
        const newId = maxId + 1;

        const categories = JSON.parse(formData.get("categories") || "[]");

        const newPost = {
            id: newId,
            title: formData.get("title"),
            slug: formData.get("slug"),
            excerpt: formData.get("excerpt"),
            content: formData.get("content"),
            categories: categories
        };

        // Obsługa zdjęcia
        const image = formData.get("image");
        if (image) {
            const imageBuffer = await image.arrayBuffer();
            const imageExtension = image.name.split('.').pop();
            const imageName = `${newPost.slug}.${imageExtension}`;
            const imageDir = path.join(process.cwd(), 'public', 'images', 'posts');
            
            // Upewnij się, że katalog istnieje
            if (!fs.existsSync(imageDir)) {
                fs.mkdirSync(imageDir, { recursive: true });
            }

            await fs.promises.writeFile(
                path.join(imageDir, imageName),
                Buffer.from(imageBuffer)
            );
        }

        postsData.posts.push(newPost);
        await fs.promises.writeFile(filePath, JSON.stringify(postsData, null, 2));

        return { success: true };
    } catch (error) {
        console.error("Błąd zapisu posta:", error);
        return { success: false, message: "Nie udało się zapisać posta." };
    }
}
