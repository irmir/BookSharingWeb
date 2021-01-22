import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeInputValue } from '../../redux/authAction'
import { searchBook } from '../../redux/queryAction.js'

const SearchComponent = ({changeInputValue, searchBook, searchText}) => {

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const searchHandler = useCallback(() => {
        searchBook(searchText)
    })

    return (
        <div className="search">
            <input type="text" placeholder="Find Your Book Here"
                    onChange={changeHandler} name="searchText"></input>
        
            <button onClick={searchHandler} className="parallelogram"><span>Search Book</span></button>
        </div>
    )
}

export const Search = connect(
    (state) => ({
        searchText: state.auth.searchText
    }),
    (dispatch) => bindActionCreators({
        changeInputValue: changeInputValue,
        searchBook: searchBook,
    }, dispatch)
)(SearchComponent)
    