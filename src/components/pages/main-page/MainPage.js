import React from 'react'

import { WelcomeSection } from './welcome section/WelcomeSection'
import { PopularBooksSection } from './popular books/PopularBooksSection'
import { LocationsSection } from './rental locations/LocationsSection'
import {Header} from '../../common/Header'

export const MainPage = () => {

    return (
        <>
            <Header />
            <WelcomeSection />
            <PopularBooksSection />
            <LocationsSection />
        </>
    )
} 