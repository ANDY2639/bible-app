import { use } from "react"
import { Book } from "@/domain/entity/Books/structure/books"

type Props = {
  promise: Promise<Book[]>
}

const Books: React.FC<Props> = ({ promise }) => {
  const books = use(promise)
  console.log(books)

  return (
    <div>
      Books
    </div>
  )
}

export default Books
