import React from 'react'
import { IBook } from '../services/bookService'

interface IProps {
    book: IBook    
}

export default function Book(props: IProps) {
  const { book } = props
  
  return (
    <li>
        {book.name}
    </li>
  )
}
