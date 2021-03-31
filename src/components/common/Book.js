import React from 'react'
import { NavLink } from 'react-router-dom'

import { Rating } from './Rating'


export const Book = ({ book, isRating }) => {

    return (
        <>
            <NavLink to={`/library/${book.id}`}>
                <img src={`data:image/gif;base64,${book.cover}`}  alt={book.title} />
            </NavLink>
            {
                isRating && <div className="rating"><Rating rank={book.rank} bookId={book.id} /></div>
            }
        </>
    )
}