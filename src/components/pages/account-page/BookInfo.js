import React from 'react'

import { Rating } from '../../common/Rating'

import testImg from '../../../image/testBook.jpg'
import lamp from '../../../image/lamp.svg'
import shelf from '../../../image/shelf.svg'

export const BookInfo = () => {

    return (
        <div className="account-book-info">
            <div className="book-image">
                <div className="lamp">
                    <img src={lamp} alt="lamp" />
                </div>
                <div className="image">
                    <a href="/">
                        <img src={testImg} alt="" />
                    </a>
                    <div className="rating"><Rating rank='4.5' bookId='001' /></div>
                </div>
                <div className="shelf">
                    <img src={shelf} alt="shelf"/>
                </div>
            </div>
            <div className="book-info">
                <ul className="book-info-text">
                    <li>Institute</li>
                    <li>The book that launched a billion young readers feels just as fresh, fun and meticulously...</li>
                    <li>rental location:</li>
                    <li>160 Broadway, New York, NY 10038</li>
                    <li>date of taking:</li>
                    <li>27.01.2021</li>
                </ul>
                <div className="book-info-bg"></div>
            </div>

        </div>
    )
}