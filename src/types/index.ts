export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
