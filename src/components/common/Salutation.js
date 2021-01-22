import React from 'react'
import { connect } from 'react-redux'
import { BookAvatar } from './BookAvatar'

import { AuthCard } from '../cards/AuthCard.js'



const SalutationComponent = ({ quote, authorQuote }) => {

    return (
        <div className="salutation">
            <div className="quote">
            <blockquote><span>{quote[0]}</span>{quote[1]}</blockquote>
                <p className="authorQuote">{authorQuote}</p>
            </div>
            <div className="picture">
                {/* <BookAvatar /> */}
                <img src="/img/avatar-booksharing.png"></img>
            </div>
            <AuthCard />
        </div >
    )
}

export const Salutation = connect(
    (state) => ({
        quote: state.site.quote,
        authorQuote: state.site.authorQuote
    })
)(SalutationComponent)