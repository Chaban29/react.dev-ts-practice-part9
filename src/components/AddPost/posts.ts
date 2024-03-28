export interface IPosts {
  id: number;
  name: string;
  done: boolean;
}

export const initialPosts: IPosts[] = [
  { id: 0, name: 'Ukraine news', done: true },
  { id: 1, name: 'USA news', done: false },
  { id: 2, name: 'France news', done: false },
];
