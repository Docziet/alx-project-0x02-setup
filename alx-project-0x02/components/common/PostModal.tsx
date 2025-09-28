import { useState } from "react";

interface PostModalProps {
  onAdd: (title: string, content: string) => void;
}

export default function PostModal({ onAdd }: PostModalProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onAdd(title, content);
    setTitle("");
    setContent("");
    setOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        Add Post
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="font-bold text-lg mb-2">New Post</h2>
            <input
              className="border p-2 w-full mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="bg-green-500 text-white px-3 py-1 rounded mr-2" onClick={handleSubmit}>
              Save
            </button>
            <button className="bg-gray-400 px-3 py-1 rounded" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
