import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-6">
      <PostModal onAdd={addPost} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {posts.map((p, i) => (
          <Card key={i} title={p.title} content={p.content} />
        ))}
      </div>
    </div>
  );
}