import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHttp } from '../../hooks/http.hook'

import {Button} from './Button'
import { SearchCard } from '../cards/SearchCard'

import { changeInputValue, showMessage } from '../../redux/authAction'
import { getBook } from '../../redux/queryAction'


const SearchComponent = ({changeInputValue, getBook, searchText, isSearchCardActive}) => {

    const {request, error} = useHttp()

    useEffect(() => {
        if (error) {
            showMessage(error)
        }
    }, [error])

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const searchHandler = useCallback(async () => {
        const data = await request(`/api/books/search/${searchText}`)
        getBook(data)
    })

    return (
        <div className="search">
            <input type="text" placeholder="Find Your Book Here"
                    onChange={changeHandler} name="searchText"></input>
        
            <Button onClick={searchHandler}
                    className="parallelogram"
                    text={<span>Search Book</span>}               
            />
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
    