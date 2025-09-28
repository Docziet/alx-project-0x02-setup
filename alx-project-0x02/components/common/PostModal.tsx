import { useState } from "react";

interface PostModalProps {
  onAdd: (title: string, content: string) => void;
}

export default function PostModal({ onAdd }: PostModalProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    if (!title.trim() || !content.trim()) return; // basic validation
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
            <h2 className="font-bold text-lg mb-4">New Post</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="border p-2 w-full mb-3 rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="border p-2 w-full mb-3 rounded"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 px-3 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            {/* Form ends here */}
          </div>
        </div>
      )}
    </div>
  );
}
