import { useQuery } from "react-query";
import { getPosts } from "../services/postsApi";

export default function ReactQueryPosts() {
    const {
        isLoading,
        isFetching,
        isError,
        error,
        data: posts
    } = useQuery('posts', getPosts);

    if (isLoading) return (
        <div className="italic">Loading ...</div>
    )

    if (isError) return (
        <div className="text-red-500">{error.message}</div>
    )

    if (posts) return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Danh sách Posts - React Query</h1>
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