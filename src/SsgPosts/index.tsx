import type { Post } from "@/src/types";

export const SsgPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section aria-labelledby="ssg-heading">
      <h1 id="ssg-heading">SSG</h1>

      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.id} className="list-none">
            <article
              aria-labelledby={`ssg-post-${p.id}-title`}
              className="group relative flex aspect-[353/200] flex-col justify-between bg-zinc-50 p-3 sm:aspect-[722/400] lg:aspect-[312/300] xl:aspect-[402/200] 2xl:aspect-[402/180] dark:bg-zinc-900"
            >
              <div className="absolute inset-0 size-full border border-zinc-200 dark:border-zinc-800" />
              <div className="absolute start-0 top-0 size-0 border-s border-t border-zinc-300 opacity-0 transition-all duration-[800ms] group-hover:size-full group-hover:opacity-100 dark:border-zinc-700" />
              <div className="absolute end-0 bottom-0 size-0 border-e border-b border-zinc-300 opacity-0 transition-all duration-[800ms] group-hover:size-full group-hover:opacity-100 dark:border-zinc-700" />

              <div className="relative z-10">
                <h2 id={`ssg-post-${p.id}-title`} className="lg:max-w-md lg:text-lg">
                  {p.title}
                </h2>
              </div>

              <div className="relative z-10 mt-2">
                <p className="text-sm text-zinc-600 lg:max-w-xs">{p.body}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
