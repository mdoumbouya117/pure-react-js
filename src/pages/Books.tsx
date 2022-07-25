import React from 'react'
import Book from '../components/Book'
import Loader from '../components/Loader'
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
            {!booksLoading && books.length > 0 ? 
            <ul>
              {books.map((book: IBook) => <Book key={book.isbn} book={book}/>)}
            </ul>
            : <Loader />
          }
    </div>
  )
}
