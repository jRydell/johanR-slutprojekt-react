export type Book = {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: string;
  favorite: boolean;
  pages: number;
  review: {
    comment: string;
    rating: number;
  };
};

export type Author = {
  name: string;
};

export type Action =
  | { type: "ADD_BOOK"; payload: Book }
  | { type: "ADD_AUTHOR"; payload: Author };

export type GlobalState = {
  readBooks: Book[];
  favoriteAuthors: Author[];
};
