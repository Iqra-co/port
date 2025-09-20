import React from 'react'
import Book from './Book'
import { booksData } from './bookData'
import "bootstrap/dist/css/bootstrap.min.css"
function Books() {
  return (
    <div>
      <h1 className='text-center'>Books</h1>
      <div className='d-flex flex-wrap justify-content-center gap-3'>
        {booksData.map((meribooks) => {
          return <Book key={meribooks.id} {...meribooks}/>
        })}
      </div>
    </div>
  )
}

export default Books;