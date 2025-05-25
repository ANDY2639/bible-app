type Props = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  isLoading: boolean,
  error: Error | null,
}

const BibleApp: React.FC<Props> = ({ search, setSearch, onSubmit, isLoading }) => {
  return (
    <main className="flex flex-col gap-10 max-w-7xl mx-auto w-full h-screen p-10 bg-gray-50 shadow-md">
      <h1 className="text-center text-3xl font-bold">BibleApp</h1>
      <form
        onSubmit={onSubmit}
        className="flex gap-0"
      >
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por libro, capítulo o verso"
          className="w-full bg-white shadow-md px-4 py-2 outline-0 rounded-bl-md rounded-tl-md"
        />
        <button
          disabled={isLoading}
          type={isLoading ? "button" : "submit"}
          className="bg-blue-500 text-white font-bold px-3 py-2 shadow-md rounded-tr-md rounded-br-md">
          Buscar
        </button>
      </form>
    </main>
  )
}

export default BibleApp
