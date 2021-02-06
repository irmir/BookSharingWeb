import React from 'react'
import { connect } from 'react-redux'

import { AuthCard } from '../cards/AuthCard'
import { Counter } from './Counter'

const SalutationComponent = ({ quote, authorQuote }) => {

    return (
        <div className="salutation">
            <div className="quote">
            <blockquote><span>{quote[0]}</span>{quote[1]}</blockquote>
                <p className="authorQuote">{authorQuote}</p>
            </div>
            <div className="picture">
                <img src="/img/avatar-booksharing.png"></img>
            </div>
            <AuthCard />
            <Counter />
        </div >
    )
}

export const Salutation = connect(
    (state) => ({
        quote: state.site.quote,
        authorQuote: state.site.authorQuote,
        description: state.site.description
    })
)(SalutationComponent)