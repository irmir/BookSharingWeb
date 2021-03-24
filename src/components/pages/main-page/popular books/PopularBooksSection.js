import React from 'react'
import { NavLink } from 'react-router-dom'

import { SliderBooks } from './SliderBooks'

export const PopularBooksSection = () => {

    return (
        <section className="popular-books">
            <div className="popular-books-header">
                <h3>Popular Books</h3>
                <NavLink to="/"><span>View all</span></NavLink>
            </div>
            <SliderBooks />
        </section>

    )
}