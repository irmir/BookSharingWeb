import React from 'react'

import {Book} from '../common/Book'

export const SearchCard = ({ searchContent }) => {

    return (
        <div className="search-card">
            {
                searchContent.map((book) => (
                    <div className="book">
                            <Book book={book} isRating={true} />
                    </div>
                ))
            }
        </div>
    )
}