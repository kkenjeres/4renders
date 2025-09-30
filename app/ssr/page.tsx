import { SsrUsers } from "@/src/SsrUsers";
import type { User } from "@/src/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return <SsrUsers users={users} />;
}
