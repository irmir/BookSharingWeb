import React from 'react'
import { NavLink } from 'react-router-dom'

import { Location } from './Location'

export const LocationsSection = () => {

    return (
        <section className="rental-locations">
            <div className="rental-locations-header">
                <h3>Rental Locations</h3>
                <NavLink to="/"><span>View all</span></NavLink>
            </div>
            <Location />
        </section>
    )
}
