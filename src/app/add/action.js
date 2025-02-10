"use server";
import fs from "fs";
const filePath = '/home/artur/Desktop/NextProjektJezyki/src/app/data/posts.json'
export async function addPost(newPost) {
    try {
        let postsData = { posts: [] };
        if (fs.existsSync(filePath)) {
            const fileContent = await fs.promises.readFile(filePath, "utf8");
            postsData = fileContent ? JSON.parse(fileContent) : { posts: [] };
        }

        const id = postsData.posts.length + 1;
        postsData.posts.push({ id, ...newPost });

        await fs.promises.writeFile(filePath, JSON.stringify(postsData, null, 2));

        return { success: true };
    } catch (error) {
        console.error("Błąd zapisu posta:", error);
        return { success: false, message: "Nie udało się zapisać posta." };
    }
}
