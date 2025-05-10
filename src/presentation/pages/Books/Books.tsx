import { use } from "react"
import { Book } from "@/domain/entity/Book/structure/book"

type Props = {
  promise: Promise<Book[]>
}

const Books: React.FC<Props> = ({ promise }) => {
  const books = use(promise)
  console.table(books)

  return (
    <div>
      Books
    </div>
  )
}

export default Books
