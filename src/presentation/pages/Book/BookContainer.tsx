import { Suspense } from "react"
import { getBook } from "@/presentation/actions/book.actions"
import Book from "./Book"

const BookContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Book promise={getBook('gn')} />
    </Suspense>
  )
}

export default BookContainer
