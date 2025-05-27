import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useDebounce from '@/presentation/hooks/useDebounce';
import { getBooks } from '@/presentation/actions/book.actions';
import { useBibleStore } from '@/presentation/store/bibleStore';
import { getSearch } from '@/presentation/actions/search.actions';
import { getVersions } from '@/presentation/actions/version.actions';
import { SearchResponse } from '@/domain/entity/Search/structure/search';
import BibleApp from "./BibleApp";

const BibleAppContainer = () => {
  const { books, setBooks, versions, setVersions, versionSelected } = useBibleStore()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

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
    queryKey: ['search', debouncedSearch],
    queryFn: () => getSearch(versionSelected?.uri as string, { q: debouncedSearch }),
    enabled: !!debouncedSearch && debouncedSearch.length >= 2,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <BibleApp
      search={search}
      searchResponse={data as SearchResponse}
      setSearch={setSearch}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default BibleAppContainer
