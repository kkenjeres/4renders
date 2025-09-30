"use client";

import { ApiList } from "@/src/CsrHome/ApiList";
import type { Post } from "@/src/types";

export const CsrHome = ({ posts }: { posts: Post[] }) => {
  return (
    <section aria-labelledby="csr-heading">
      <h1 id="csr-heading">CSR</h1>
      <ApiList posts={posts} className="mt-4" />
    </section>
  );
};
