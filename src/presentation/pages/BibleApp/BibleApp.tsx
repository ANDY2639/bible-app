import { Parameters, SearchResponse } from "@/domain/entity/Search/structure/search"
import { useBibleStore } from "@/presentation/store/bibleStore"

type Props = {
  searchParams: Parameters,
  searchResponse: SearchResponse,
  isLoading: boolean,
  error: Error | null,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  onChangeVersion: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const BibleApp: React.FC<Props> = ({ searchParams, searchResponse, isLoading, onChange, onChangeVersion }) => {
  const { versions, versionSelected } = useBibleStore()

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
              onChange={onChangeVersion}
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
          name="q"
          value={searchParams.q}
          onChange={onChange}
          placeholder="Buscar por libro, capítulo o verso"
          className="w-full bg-white shadow-md px-4 py-2 outline-0 rounded-md"
        />
        <div className="flex justify-between">
          <select name="testament" onChange={onChange}>
            <option value="both">both</option>
            <option value="old">old</option>
            <option value="new">new</option>
          </select>
          <select name="take" onChange={onChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <select name="page" onChange={onChange}>
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
            <option value="3">Page 3</option>
            <option value="4">Page 4</option>
            <option value="5">Page 5</option>
          </select>
        </div>
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
