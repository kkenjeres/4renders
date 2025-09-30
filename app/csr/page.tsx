"use client";

import { useEffect, useState } from "react";
import { CsrHome } from "@/src/CsrHome";
import type { Post } from "@/src/types";
import { ApiListSkeleton } from "@/src/CsrHome/ApiList/ApiListSkeleton";

export default function Page() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data: Post[] = await res.json();
      setPosts(data);
    })();
  }, []);

  if (!posts) return <ApiListSkeleton />;

  return <CsrHome posts={posts} />;
}
