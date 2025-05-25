import { createContext, useMemo, useState } from "react";
import { Book } from "@/domain/entity/Book/structure/book";

type BibleContextAttributes = {
  books: Book[];
  setBooks: (books: Book[]) => void;
}

const BibleContext = createContext<BibleContextAttributes>({
  books: [],
  setBooks: () => { },
});

const BibleProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([])

  const contextValue = useMemo(() => ({
    books,
    setBooks,
  }), [books])

  return (
    <BibleContext value={contextValue}>
      {children}
    </BibleContext>
  );
};

export { BibleContext, BibleProvider };
