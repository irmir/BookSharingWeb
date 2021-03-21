import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHttp } from '../../hooks/http.hook'

import {Button} from './Button'
import { SearchCard } from '../cards/SearchCard'
import { Loader } from '../common/Loader'

import { changeInputValue, showMessage } from '../../redux/siteAction'
import { getBook } from '../../redux/queryAction'
import { Message } from './Message'


const SearchComponent = ({changeInputValue, getBook, searchText, searchContent, textMessage}) => {

    const {request, error, loading} = useHttp()

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
                    onChange={changeHandler} name="searchText" className="search-input"></input>
        
            <Button onClick={searchHandler}
                    className="parallelogram"
                    text={<span>Search Book</span>}               
            />
            {loading && <Loader />}
            {searchContent && <SearchCard searchContent={searchContent}/>}
            <div class="error">
                {textMessage && <Message textMessage={textMessage} />}
            </div>            
        </div>
    )
}

export const Search = connect(
    (state) => ({
        searchText: state.site.searchText,
        searchContent: state.query.searchContent,
        textMessage: state.site.textMessage
    }),
    (dispatch) => bindActionCreators({
        changeInputValue,
        getBook,
        showMessage 
    }, dispatch)
)(SearchComponent)
    