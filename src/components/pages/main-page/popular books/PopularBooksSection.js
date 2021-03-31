import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { SliderBooks } from './SliderBooks'

import { setPopularBooks, getNextSlide } from '../../../../redux/sliderAction'


const PopularBooksSectionComponent = ({ setPopularBooks, getNextSlide }) => {

    useEffect(() => {
        setPopularBooks()
        getNextSlide()
        setIsLocalDataLoad(true)
    }, [])

    const [isLocalDataLoad, setIsLocalDataLoad] = useState(false)

    return (
        <>
            {isLocalDataLoad ?
                <section className="popular-books">
                    <div className="popular-books-header">
                        <h3>Popular Books</h3>
                        <NavLink to="/"><span>View all</span></NavLink>
                    </div>
                    <SliderBooks />
                </section>: null }
        </>
    )
}

export const PopularBooksSection = connect(
    null,
    (dispatch) => bindActionCreators({
        setPopularBooks,
        getNextSlide
    }, dispatch)
)(PopularBooksSectionComponent)