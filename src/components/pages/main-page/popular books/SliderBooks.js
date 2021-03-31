import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../../../hooks/http.hook'

import { Button } from '../../../common/Button'
import { Book } from '../../../common/Book'

import { setPopularBooks, getPrevSlide, getNextSlide } from '../../../../redux/sliderAction.js'


const SliderBooksComponent = ({ count, setBook, setPopularBooks,
    getNextSlide, getPrevSlide, popularBooks }) => {

    const { request } = useHttp()

    useEffect(() => {
        if (!popularBooks) {
            (async function getPopularBooks() {
                const data = await request(`http://localhost:5100/api/books/popular?number=12`)
                setPopularBooks(data)
                getNextSlide()
            })()
        }
    }, [])

    const prevSlide = () => {
        getPrevSlide()
    }

    const nextSlide = () => {
        getNextSlide()
    }

    return (
        <>
            {setBook ?
                <div className="slider">
                    <div className="container">
                        <div className="slider-slides">
                            <div className="side-book left">
                                <Book isRating={false} book={setBook[0]} />
                                <Button onClick={prevSlide} disabled={count === 1 ? "disabled" : false} />
                            </div>
                            <div className="central-book">
                                <Book isRating={false} book={setBook[1]} />
                            </div>
                            <div className="side-book right">
                                <Book isRating={false} book={setBook[2]} />
                                <Button text="" onClick={nextSlide} disabled={count === 12 ? "disabled" : false} />
                            </div>
                        </div>
                        <div className="slider-arrows">
                            <Button className="prev-btn" onClick={prevSlide} disabled={count === 1 ? "disabled" : false}
                                text={
                                    <>
                                        <span>
                                            <svg width="66" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4C0 4 0 4 1 4l3 4 1-1-3-3 3-3-1-1-3 4zm65 0H1v1h65V4z" fill="#000" />
                                            </svg>
                                        </span>
                                    </>
                                }
                            />
                            <Button className="next-btn" onClick={nextSlide} disabled={count === 12 ? "disabled" : false}
                                text={
                                    <>
                                        <span>
                                            <svg width="66" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M65 4c1 0 1 0 0 0l-3-4-1 1 3 3-3 3 1 1 3-4zM0 5h65V4H0v1z" fill="#000" />
                                            </svg>
                                        </span>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div> :
                null
            }
        </>
    )
}

export const SliderBooks = connect(
    (state) => ({
        setBook: state.slider.setBook,
        count: state.slider.count,
        popularBooks: state.slider.popularBooks
    }),
    (dispatch) => bindActionCreators({
        setPopularBooks,
        getNextSlide,
        getPrevSlide
    }, dispatch)
)(SliderBooksComponent)