import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((p) => (
        <PostCard key={p.id} {...p} />
      ))}
    </div>
  );
}
