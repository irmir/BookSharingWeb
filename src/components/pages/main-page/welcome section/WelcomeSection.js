import React from 'react'

import { Description } from '../../../common/Description'
import {Logo} from '../../../common/Logo'
import { Salutation } from './Salutation'
import { Search } from '../../../common/Search'

export const WelcomeSection = () => {

    return (
        <main className="welcome-section container">
            <Logo width="943" height="205" />
            <Search />
            <Salutation />
            <div className="description"><Description /></div>   
        </main>
    )
}
