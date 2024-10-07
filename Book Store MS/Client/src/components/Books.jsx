import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
    .then(res => {
      setBooks(res.data.books)
    }).catch( err => console.log(err))
  }, [])
  return (
    <div>Books</div>
  )
}

export default Books