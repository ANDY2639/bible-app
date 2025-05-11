import { useState } from "react";
import { getBook } from "@/presentation/actions/book.actions";
import useSkeleton from "@/presentation/hooks/useSkeleton";
import Book from "./Book";
import BookLoader from "./Loader";
import ErrorMessage from "@/presentation/shared/ErrorMessage";

const BookContainer = () => {
  const [book, setBook] = useState('gn');

  const { Component: BookComponent } = useSkeleton({
    fetchData: () => getBook(book),
    renderComponent: (data) => <Book book={data} />,
    loadingFallback: <BookLoader />,
    errorFallback: (error) => <ErrorMessage error={error} />,
    dependencies: [book]
  });

  return (
    <>
      <select value={book} onChange={(e) => setBook(e.target.value)}>
        <option value="gn">Genesis</option>
        <option value="ex">Exodus</option>
        <option value="lv">Leviticus</option>
        <option value="nm">Numbers</option>
        <option value="dt">Deuteronomy</option>
        <option value="jz">Joshua</option>
        <option value="jd">Judges</option>
        <option value="rt">Ruth</option>
        <option value="1s">1 Samuel</option>
        <option value="2s">2 Samuel</option>
        <option value="1r">1 Kings</option>
        <option value="2r">2 Kings</option>
      </select>
      <BookComponent />
    </>
  );
};

export default BookContainer;