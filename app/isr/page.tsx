import { IsrTodos } from "@/src/IsrTodos";
import type { Todo } from "@/src/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=12", {
    next: { revalidate: 60 },
  });
  const todos: Todo[] = await res.json();

  return <IsrTodos todos={todos} />;
}
