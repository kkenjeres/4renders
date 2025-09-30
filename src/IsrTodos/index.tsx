import type { Todo } from "@/src/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui-kit/shadcn/card";
import { Badge } from "../ui-kit/shadcn/badge";

export const IsrTodos = ({ todos }: { todos: Todo[] }) => {
  return (
    <section aria-labelledby="isr-heading">
      <h1 id="isr-heading">ISR</h1>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {todos.map((t) => {
          const titleId = `isr-todo-${t.id}-title`;
          return (
            <li key={t.id} className="list-none">
              <Card
                aria-labelledby={titleId}
                className="flex aspect-[200/80] flex-col justify-between sm:aspect-[400/200] lg:aspect-[312/200] xl:aspect-[402/150] 2xl:aspect-[402/120]"
              >
                <CardHeader>
                  <CardTitle id={titleId}>{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <Badge variant={t.completed ? "secondary" : "default"}>
                    {t.completed ? "done" : "open"}
                  </Badge>
                  <Badge variant="secondary">ID {t.id}</Badge>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
