export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  publishedDate: string;
  cover: string | null;
  read: boolean;
};

export type NewBook = Omit<Book, 'id'>;
export type UpdateBook = Partial<Book>;
