import { useEffect, useState } from "react";
import { getPosts } from "@services/postsApi";

export default function TraditionalPosts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPosts();
                
                setPosts(response);
            } catch (err) {
                setError(err);
            }
            
            setIsLoading(false);
        }

        fetchData();
    }, [])

    if (isLoading) return (
        <div className="italic">Loading ...</div>
    )

    if (error) return (
        <div className="text-red-500">{error.message}</div>
    )

    if (posts) return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Danh sách Posts - useEffect</h1>
            <div className="flex flex-col gap-3">
                {posts.data.map(post => (
                    <div
                        key={post._id}
                        className="border border-gray-400 rounded-md p-3 w-96 h-14 flex justify-between items-center"
                    >
                        {post.title}
                    </div>
                ))}
            </div>
        </div>
    )
}