import React from 'react'

import { WelcomeSection } from './welcome section/WelcomeSection'
import { PopularBooksSection } from './popular books/PopularBooksSection'
import { LocationsSection } from './rental locations/LocationsSection'

export const MainPage = () => {

    return (
        <>
            <WelcomeSection />
            <PopularBooksSection />
            <LocationsSection />
        </>
    )
} 