import { SsgPosts } from "@/src/SsgPosts";
import type { Post } from "@/src/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
    cache: "force-cache",
  });
  const posts: Post[] = await res.json();

  return <SsgPosts posts={posts} />;
}
