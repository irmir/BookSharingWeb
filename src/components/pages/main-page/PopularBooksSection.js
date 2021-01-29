import React from 'react'

import { SliderBooks } from './SliderBooks.js'

export const PopularBooksSection = () => {

    return (
        <section className="popular-books">
            <div className="popular-books-header">
                <h3>Popular Books</h3>
                <button><span>View all</span></button>
            </div>
            <SliderBooks />
        </section>

    )
}