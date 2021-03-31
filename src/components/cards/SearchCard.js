import React, { useRef, useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Book } from '../common/Book'

import { hideSearchCard } from '../../redux/queryAction'

const SearchCardComponent = ({ searchContent, hideSearchCard, searchRef }) => {

    const searchCardRef = useRef(null)

    const clickOutsideHandler = useCallback((event) => {

        if ((event.target !== (searchCardRef.current || searchRef.current)) && !searchCardRef.current.contains(event.target) && !searchRef.current.contains(event.target)) {
            hideSearchCard()
        }
        
    }, [hideSearchCard])

    useEffect(() => {
        window.addEventListener('click', clickOutsideHandler, true)

        return () => {
            window.removeEventListener('click', clickOutsideHandler, true)
        }
    }, [clickOutsideHandler])

    return (
        <div ref={searchCardRef} className="search-card">
            {
                searchContent.map((book) => (
                    <div className="book" key={book.id}>
                        <Book book={book} isRating={true} />
                    </div>
                ))
            }
        </div>
    )
}

export const SearchCard = connect(
    null,
    (dispatch) => bindActionCreators({
        hideSearchCard
    }, dispatch)
)(SearchCardComponent)