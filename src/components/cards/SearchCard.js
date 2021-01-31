import React from 'react'
import { connect } from 'react-redux'

import {NavLink} from 'react-router-dom'

const SearchCardComponent = ({ searchContent }) => {

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

export const SearchCard = connect(
    (state) => ({
        searchContent: state.query.searchContent
    })
)(SearchCardComponent)