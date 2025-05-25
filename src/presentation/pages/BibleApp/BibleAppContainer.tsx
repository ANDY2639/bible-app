import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useBibleStore } from '@/presentation/store/bibleStore';
import { getVersions } from '@/presentation/actions/version.actions';
import { getBook, getBooks } from '@/presentation/actions/book.actions';
import BibleApp from "./BibleApp";

const BibleAppContainer = () => {
  const { books, setBooks, versions, setVersions } = useBibleStore()
  const [search, setSearch] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('');

  const { data: listBooks } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  if (listBooks && !books.length) {
    setBooks(listBooks)
  }

  const { data: listVersions } = useQuery({
    queryKey: ['versions'],
    queryFn: getVersions,
  })

  if (listVersions && !versions.length) {
    setVersions(listVersions)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['search', submittedQuery],
    queryFn: () => getBook(submittedQuery),
    enabled: !!submittedQuery,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitted');
    setSubmittedQuery(search);
  };

  console.log({ data })

  return (
    <BibleApp
      search={search}
      setSearch={setSearch}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default BibleAppContainer
