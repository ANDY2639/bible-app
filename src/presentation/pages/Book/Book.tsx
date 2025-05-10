import { use } from "react"
import { Book as BookType } from "@/domain/entity/Book/structure/book"

type Props = {
  promise: Promise<BookType>
}

const Book: React.FC<Props> = ({ promise }) => {
  const book = use(promise)
  console.log({ book })

  return (
    <div>
      Book
    </div>
  )
}

export default Book
