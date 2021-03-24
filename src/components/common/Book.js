import React from 'react'

import { Rating } from './Rating'

import testBook from '../../image/testBook.jpg'
import { NavLink } from 'react-router-dom'


export const Book = ({ book, isRating }) => {

    return (
        <>
            <NavLink to={`/library/${book.id}`}>
                <img src={testBook} title={book.title} />
            </NavLink>
            {
                isRating && <div className="rating"><Rating rank={book.rank} bookId={book.id} /></div>
            }
        </>
    )
}