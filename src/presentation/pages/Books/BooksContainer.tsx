import { Suspense } from "react"
import Books from "./Books"
import { getBooks } from "@/presentation/actions/books"

const BooksContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Books promise={getBooks()} />
    </Suspense>
  )
}

export default BooksContainer
