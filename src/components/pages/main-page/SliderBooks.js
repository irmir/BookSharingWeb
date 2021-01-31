import React from 'react'
import { connect } from 'react-redux'

import Slider from "react-slick"

const SliderBooksComponent = ({ popularBooks }) => {

    const settings = {
        // className: "center",
        centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        slidesToShow: 2,
        // variableWidth: true,
        // appendArrows: $('.arrows'),
        // speed: 500,
    };


    // debugger
    return (
        <>
            <div className="slider">
                <div className="container">
                    <div className="slider-slides">
                        <a className="side-book left" alt="book" href="URL">
                            <img src="./img/book1.jpg" />
                            <button></button>
                        </a>
                        <div className="central-book">
                                <a alt="" href="URL">
                                    <img src="./img/book4.jpg" />
                                </a>
                        </div>
                        <a className="side-book right" alt="" href="URL" >
                            <img src="./img/book3.jpg" />
                            <button></button>
                        </a>
                    </div>
                    <div className="slider-arrows">
                        <button className="prev-btn">
                            <span>
                                <svg width="66" height="8" viewBox="0 0 66 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM66 3.5L1 3.5V4.5L66 4.5V3.5Z" fill="black" />
                                </svg>
                            </span>
                        </button>
                        <button className="next-btn">
                            <span>
                                <svg width="66" height="8" viewBox="0 0 66 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.3536 4.35355C65.5488 4.15829 65.5488 3.84171 65.3536 3.64645L62.1716 0.464466C61.9763 0.269204 61.6597 0.269204 61.4645 0.464466C61.2692 0.659728 61.2692 0.976311 61.4645 1.17157L64.2929 4L61.4645 6.82843C61.2692 7.02369 61.2692 7.34027 61.4645 7.53553C61.6597 7.7308 61.9763 7.7308 62.1716 7.53553L65.3536 4.35355ZM0 4.5H65V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
        // <div className="slider container">
        //     <div className="slider-small">
        //         {/* <Slider {...settings} >
        //             {popularBooks.map((item, index) => (
        //                 <div className="slider-small-item">
        //                     <img src={item.urlImg} />
        //                 </div>
        //             ))}
        //         </Slider> */}
        //     </div>
        // </div>


    )
}

export const SliderBooks = connect(
    (state) => ({
        popularBooks: state.site.popularBooks
    })
)(SliderBooksComponent)