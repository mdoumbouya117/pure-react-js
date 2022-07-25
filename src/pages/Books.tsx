import React from 'react'
import Book from '../components/Book'
import { getBooks, IBook } from '../services/bookService'

export default function Books() {
  const [books, setBooks] = React.useState<Array<IBook>>([])
  const [booksLoading, setBooksLoading] = React.useState(false)

  React.useEffect(() => {
    const loadBooks = async () => {
        setBooksLoading(true)
        const bookList = await getBooks()
        setBooks(bookList)
        setBooksLoading(false)
    }

    loadBooks()
  }, [])

  return (
    <div>
        <h1>Books</h1>
        <ul>
            {!booksLoading && books.length > 0 ? books.map((book: IBook) => <Book key={book.isbn} book={book}/>) : <p>Loading ...</p>}
        </ul>
    </div>
  )
}
