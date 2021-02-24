import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { getPrevSlide, getNextSlide } from '../../../redux/sliderAction.js'
import { Button } from '../../common/Button.js'
// import {useHttp} from '../../../hooks/http.hook.js'

const SliderBooksComponent = ({ count, setBook, getNextSlide, getPrevSlide }) => {

    // const {queries} = useHttp()

    // useEffect(() => {
    //     const data = await queries('')
    //     getNextSlide(data)
    // }, [])

    useEffect(() => {
        getNextSlide()
    }, [])

    const prevSlide = useCallback(() => {
        debugger
        getPrevSlide()
    })

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
                                <NavLink alt="book" to="/">
                                    {/* <img src="./img/book1.jpg" /> */}
                                    <p>{setBook[0]}</p>
                                </NavLink>
                                <Button onClick={prevSlide} disabled={count === 1 ? "disabled" : false} />
                            </div>
                            <div className="central-book">
                                <NavLink alt="" to="/">
                                    <p>{setBook[1]}</p>
                                    {/* <img src="./img/book4.jpg" /> */}
                                </NavLink>
                            </div>
                            <div className="side-book right">
                                <NavLink alt="" to="/" >
                                    {/* <img src="./img/book3.jpg" /> */}
                                    <p>{setBook[2]}</p>
                                </NavLink>
                                <Button text="" onClick={nextSlide} disabled={count === 20 ? "disabled" : false} />
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
                            <Button className="next-btn" onClick={nextSlide} disabled={count === 20 ? "disabled" : false}
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
        count: state.slider.count
    }),
    (dispatch) => bindActionCreators({
        getNextSlide,
        getPrevSlide
    }, dispatch)
)(SliderBooksComponent)