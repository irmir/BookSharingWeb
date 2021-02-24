import React from 'react'
import {NavLink} from 'react-router-dom'

export const SearchCard = ({ searchContent }) => {

    return (
        <div className="search-card">
            {
                searchContent.map((book) => (
                    <div className="book">
                        <NavLink to={`/library/${book.id}`}>
                            {book.title}
                        </NavLink>
                    </div>
                ))
            }
        </div>
    )
}