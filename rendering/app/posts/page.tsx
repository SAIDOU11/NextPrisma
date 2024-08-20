import Link from "next/link";
import prisma from "@/lib/db";

const PostPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <main className="flex  flex-col items-center pt-24 text-center">
      <h1 className="text-3xl font-bold">All Posts (0)</h1>
      <ul className="border-t border-b border-black py-5 leading-8">
        {posts.map((post: any) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
