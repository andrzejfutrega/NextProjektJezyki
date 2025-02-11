import PostCard from '../../components/PostCard';
import postsData from '../../data/posts.json';

export default function CategoryPage({ params }) {
    const { category } = params;
    
    const filteredPosts = postsData.posts.filter(post => 
        post.categories?.includes(category)
    );

    const getPostLayout = (index, totalPosts) => {
        // Używamy modulo 6 aby wzór powtarzał się co 6 postów
        const position = index % 6;
        // Sprawdzamy czy to ostatni post w całej kolekcji
        const isLastPost = index === totalPosts - 1;
        // Sprawdzamy czy to ostatni post w cyklu
        const isLastInCycle = position === 5;
        
        return {
            isLarge: position === 0,
            className: `
                ${position === 0 ? 'md:col-span-2 md:row-span-2' : ''} 
                ${position === 3 ? 'md:col-span-2' : ''}
                ${(isLastPost || isLastInCycle) ? 'md:col-span-2 lg:col-span-3' : ''}
                transform hover:scale-[1.02] transition-transform duration-200
            `
        };
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 auto-rows-min">
            {filteredPosts.map((post, index) => {
                const layout = getPostLayout(index, filteredPosts.length);
                return (
                    <div key={post.id} className={layout.className}>
                        <PostCard 
                            post={{
                                ...post,
                                imageUrl: `/images/posts/${post.slug}.jpg`
                            }}
                            isLarge={layout.isLarge}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export function generateStaticParams() {
    const categories = ["swiat", "sport", "dieta", "programowanie"];
    return categories.map((category) => ({
        category: category,
    }));
} 