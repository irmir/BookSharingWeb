import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHttp } from '../../hooks/http.hook'

import { Button } from './Button'
import { SearchCard } from '../cards/SearchCard'
import { Loader } from '../common/Loader'
import { Input } from '../common/Input'

import { getBook, hideSearchCard } from '../../redux/queryAction'
import { Message } from './Message'


const SearchComponent = ({ getBook, searchContent, isSearchCard, hideSearchCard }) => {
    
    const { request, loading } = useHttp()

    const searchRef = useRef(null)

    const [error, setError] = useState('')
    const [searchText, setSearchText] = useState(null)

    const onChange = event => {
        setSearchText(event.target.value)
    }

    const searchHandler = async (event) => {

        if (event.type === "keypress" && event.key !== "Enter") {
            return
        }

        setError('')
            try {
                const data = await request(`/api/books/search/${searchText}`)

                if (data.length === 0) {
                    setError('Books not found')
                    hideSearchCard()
                } else getBook(data)
            }
            catch (e) {
                setError('An error occurred')
            }
    }

    return (
        <div ref={searchRef} className="search">
            <Input type="text" placeholder="Find Your Book Here" value={searchText}
                onChange={onChange} onKeyPress={searchHandler} name="searchText" className="search-input" />

            <Button onClick={searchHandler}
                className="parallelogram" name="button"
                text={<span name="button">Search Book</span>}
            />
            {loading && <Loader />}
            {isSearchCard && <SearchCard searchContent={searchContent} searchRef={searchRef} />}
            <div className="error">
                {error && <Message text={error} />}
            </div>
        </div>
    )
}

export const Search = connect(
    (state) => ({
        searchContent: state.query.searchContent,
        isSearchCard: state.query.isSearchCard
    }),
    (dispatch) => bindActionCreators({
        getBook,
        hideSearchCard,
    }, dispatch)
)(SearchComponent)
