import { useState } from 'react';

export default function Post({ data, handleDeletePost, handleUpdatePost }) {
    const [isEditing, setIsEditing] = useState(false);
    const [titleInput, setTitleInput] = useState(data.title);

    return (
        <div
            className="border border-gray-400 rounded-md p-3 gap-2 w-96 h-14 flex justify-between items-center"
        >
            {
                isEditing
                    ?
                    <input
                        className='border border-gray-400 grow'
                        type="text"
                        autoFocus
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                    />
                    :
                    <span>{data.title}</span>
            }
            <div>
                <button
                    className="text-sm text-zinc-800 hover:underline mr-3"
                    onClick={() => {
                        if (isEditing) {
                            handleUpdatePost({
                                ...data,
                                title: titleInput.trim()
                            });
                            setIsEditing(false);
                        }
                        else {
                            setIsEditing(true);
                        }
                    }}
                >
                    {isEditing ? "Lưu" : "Sửa"}
                </button>
                <button
                    className="text-sm text-red-500 hover:underline"
                    onClick={() => handleDeletePost(data._id)}
                >
                    Xóa
                </button>
            </div>
        </div>
    )
}
