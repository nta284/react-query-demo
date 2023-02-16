import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getPosts, createPost, deletePost, updatePost } from "@services/postsApi";
import Post from "@components/home/Post";

export default function Home() {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isFetching,
        isError,
        error,
        data: posts
    } = useQuery('posts', getPosts);

    console.log(isLoading, isFetching);

    const createPostMutation = useMutation(createPost, {
        onSuccess: () => {
            // Refetch thủ công
            queryClient.invalidateQueries('posts');
        }
    })

    const deletePostMutation = useMutation(deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        }
    })

    const updatePostMutation = useMutation(updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        }
    })

    const [newPostInput, setNewPostInput] = useState("");

    const handleCreatePost = () => {
        if (newPostInput.trim() !== "") {
            createPostMutation.mutate({
                // Được truyền vào params của hàm createPost
                title: newPostInput.trim()
            })

            setNewPostInput("");
        }
    }

    const handleDeletePost = (_id) => {
        deletePostMutation.mutate(_id);
    }

    const handleUpdatePost = (post) => {
        updatePostMutation.mutate(post);
    }

    if (isLoading) return (
        <div className="italic">Loading ...</div>
    )

    // if (isFetching) return (
    //     <div className="italic">Fetching ...</div>
    // )

    if (isError) return (
        <div className="text-red-500">{error.message}</div>
    )

    if (posts) return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Quản lý Posts:</h1>
            <div className="mb-8">
                <span>Thêm post:</span>
                <input
                    className="border border-black/50 rounded-sm py-1 px-2 mx-2"
                    type="text"
                    value={newPostInput}
                    onChange={e => setNewPostInput(e.target.value)}
                />
                <button
                    className="py-1 px-2 border border-black/50 rounded-sm mr-2"
                    onClick={handleCreatePost}
                >Thêm</button>
                <button
                    className="py-1 px-2 border border-black/50 rounded-sm"
                    onClick={() => {
                        queryClient.invalidateQueries('posts');
                    }}
                >Đồng bộ</button>
            </div>
            <div className="flex flex-col gap-3">
                {posts.data.map(post => (
                    <Post
                        key={post._id}
                        data={post}
                        handleDeletePost={handleDeletePost}
                        handleUpdatePost={handleUpdatePost}
                    />
                ))}
            </div>
        </div>
    )
}