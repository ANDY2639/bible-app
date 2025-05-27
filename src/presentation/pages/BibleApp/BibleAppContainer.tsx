import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useDebounce from '@/presentation/hooks/useDebounce';
import { getBooks } from '@/presentation/actions/book.actions';
import { useBibleStore } from '@/presentation/store/bibleStore';
import { getSearch } from '@/presentation/actions/search.actions';
import { getVersions } from '@/presentation/actions/version.actions';
import { initialParameters, SearchResponse } from '@/domain/entity/Search/structure/search';
import BibleApp from "./BibleApp";

const BibleAppContainer = () => {
  const { books, setBooks, versions, setVersions, versionSelected, setVersionSelected } = useBibleStore()
  const [searchParams, setSearchParams] = useState(initialParameters)
  const debouncedSearch = useDebounce(searchParams.q)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSearchParams(prev => ({
      ...prev,
      [name]: name === 'take' || name === 'page' ? +value : value,
    }));
  }

  const handleChangeVersion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const version = versions.find((version) => version.version === e.target.value)
    setVersionSelected(version)
  }

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
    queryKey: ['search', debouncedSearch, searchParams.testament, searchParams.take, searchParams.page],
    queryFn: () => getSearch(versionSelected?.uri as string, searchParams),
    enabled: !!debouncedSearch && debouncedSearch.length >= 2,
  })

  return (
    <BibleApp
      searchParams={searchParams}
      searchResponse={data as SearchResponse}
      isLoading={isLoading}
      error={error}
      onChange={handleChange}
      onChangeVersion={handleChangeVersion}
    />
  )
}

export default BibleAppContainer
