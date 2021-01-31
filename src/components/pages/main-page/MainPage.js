import React from 'react'

import { WelcomeSection } from './WelcomeSection.js'
import { PopularBooksSection } from './PopularBooksSection.js'
import { LocationsSection } from './LocationsSection.js'

export const MainPage = () => {

    return (
        <>
            <WelcomeSection />
            <PopularBooksSection />
            <LocationsSection />
        </>
    )
} 