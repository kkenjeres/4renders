import type { User } from "@/src/types";
import { Card, CardHeader, CardTitle, CardContent } from "../ui-kit/shadcn/card";
import { Badge } from "../ui-kit/shadcn/badge";

export const SsrUsers = ({ users }: { users: User[] }) => {
  return (
    <section aria-labelledby="ssr-heading">
      <h1 id="ssr-heading">SSR</h1>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((u) => (
          <li key={u.id} className="list-none">
            <article aria-labelledby={`ssr-user-${u.id}-title`}>
              <Card className="flex h-full flex-col transition-shadow focus-within:shadow hover:shadow">
                <CardHeader>
                  <CardTitle id={`ssr-user-${u.id}-title`}>{u.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span>@{u.username}</span>
                    <Badge variant="secondary">ID {u.id}</Badge>
                  </div>
                  <div className="mt-2">{u.email}</div>
                </CardContent>
              </Card>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
