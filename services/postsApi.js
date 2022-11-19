import axios from "axios";

const postsApi = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const getPosts = async () => {
    const response = await postsApi.get("/posts");
    return response.data.data;
}

export const createPost = async (post) => {
    return await postsApi.post("/posts", post);
}

export const updatePost = async (post) => {
    return await postsApi.patch(`/posts/${post._id}`, post);
}

export const deletePost = async (_id) => {
    return await postsApi.delete(`/posts/${_id}`);
}