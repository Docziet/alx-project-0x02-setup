import { PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
