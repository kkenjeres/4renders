import type { Post } from "@/src/types";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui-kit/shadcn/card";
import { cn } from "../../lib/utils";

interface Props {
  posts: Post[];
  className?: string;
}

export const ApiList = ({ posts, className }: Props) => {
  return (
    <section aria-label="Posts" className={cn(className)}>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const titleId = `post-${p.id}-title`;
          return (
            <li key={p.id} className="list-none">
              <article aria-labelledby={titleId}>
                <Card
                  aria-labelledby={titleId}
                  className="flex aspect-[200/80] flex-col justify-between p-3 transition-shadow focus-within:shadow hover:shadow sm:aspect-[400/240] lg:aspect-[312/200] xl:aspect-[402/200] 2xl:aspect-[402/180]"
                >
                  <CardHeader>
                    <CardTitle id={titleId}>{p.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground">
                    <p>{p.body}</p>
                  </CardContent>
                </Card>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
