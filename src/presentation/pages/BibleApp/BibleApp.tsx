import { SearchResponse } from "@/domain/entity/Search/structure/search"
import { useBibleStore } from "@/presentation/store/bibleStore"

type Props = {
  search: string,
  searchResponse: SearchResponse,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  isLoading: boolean,
  error: Error | null,
}

const BibleApp: React.FC<Props> = ({ search, searchResponse, setSearch, isLoading }) => {
  const { versions, versionSelected, setVersionSelected } = useBibleStore()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const version = versions.find((version) => version.version === e.target.value)
    setVersionSelected(version)
  }

  return (
    <>
      <nav className="bg-blue-500">
        <ul className="flex justify-between items-center gap-10 max-w-7xl mx-auto px-5 py-3">
          <li>
            <a href="/">Logo</a>
          </li>
          <li>
            <select
              className="bg-gray-50 px-2 py-1 outline-0 rounded-xs"
              onChange={handleChange}
            >
              <option value="">-- Seleccione una versión --</option>
              {versions.map(v => (
                <option
                  key={v.version}
                  value={v.version}
                  selected={v.version === versionSelected?.version}
                >{v.name}</option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col gap-10 max-w-7xl mx-auto w-full min-h-screen p-10 bg-gray-50 shadow-md">
        <h1 className="text-center text-3xl font-bold">BibleApp</h1>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por libro, capítulo o verso"
          className="w-full bg-white shadow-md px-4 py-2 outline-0 rounded-md"
        />
        {isLoading && <p>Cargando...</p>}
        {searchResponse && (
          <ul className="flex flex-col gap-2.5">
            {searchResponse.data.map((item) => (
              <li key={item.id} className="bg-gray-200 px-4 py-3 rounded-md">
                <p className="text-blue-500 font-bold text-shadow">{item.book} {item.chapter}:{item.number}</p>
                <p className="text-black font-normal">{item.verse}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}

export default BibleApp
