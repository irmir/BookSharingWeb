import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHttp } from '../../hooks/http.hook'

import { changeInputValue, showMessage } from '../../redux/authAction'
import { getBook } from '../../redux/queryAction.js'
import { SearchCard } from '../cards/SearchCard.js'

const SearchComponent = ({changeInputValue, getBook, searchText, isSearchCardActive}) => {

    const {request, error} = useHttp()

    useEffect(() => {
        debugger
        if (error) {
            showMessage(error)
        }
    }, [error])

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const searchHandler = useCallback(async () => {
        debugger
        const data = await request(`/api/books/search/${searchText}`)
        getBook(data)
    })

    return (
        <div className="search">
            <input type="text" placeholder="Find Your Book Here"
                    onChange={changeHandler} name="searchText"></input>
        
            <button onClick={searchHandler} className="parallelogram"><span>Search Book</span></button>
            {isSearchCardActive && <SearchCard />}
        </div>
    )
}

export const Search = connect(
    (state) => ({
        searchText: state.auth.searchText,
        isSearchCardActive: state.query.isSearchCardActive
    }),
    (dispatch) => bindActionCreators({
        changeInputValue: changeInputValue,
        getBook: getBook,
    }, dispatch)
)(SearchComponent)
    