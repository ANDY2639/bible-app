import { Book as BookType } from "@/domain/entity/Book/structure/book"

type Props = {
  book: BookType
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <div className="py-8">
      <h1 className="text-xl">{book.names[0]} ({book.abrev})</h1>
      <p>N° Capitulos: <span>{book.chapters}</span></p>
      <span>{book.testament}</span>
    </div>
  )
}

export default Book
