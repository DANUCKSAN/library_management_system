import React from 'react'

const BookOverview = ({title,author,genre,rating,total_copies,available_copies,description,color,cover}) => {
  return (
    <section className='book-verview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}</p>
            <p>Total Copies: {total_copies}</p>
            <p>Available Copies: {available_copies}</p>
            <p>Description: {description}</p>
            <div className='w-full h-full flex items-center justify-center p-4'>
                <img src={cover} alt={title} className='w-full h-full object-contain' />
            </div>
        </div>
    </section>
  )
}

export default BookOverview
