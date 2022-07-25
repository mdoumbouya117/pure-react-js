import React from 'react'
import { Link } from 'react-router-dom'
import { IBook } from '../services/bookService'

interface IProps {
    book: IBook    
}

export default function Book(props: IProps) {
  const { book } = props
  
  return (
    <li key={book.isbn}>
        <Link
            state={ book }
            to={'/characters'}
        >
            {book.name}
        </Link>
    </li>
  )
}
