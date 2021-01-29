import React from 'react'
import { Description } from '../../common/Description.js'

import {Logo} from '../../common/Logo.js'
import { Salutation } from '../../common/Salutation.js'
import { Search } from '../../common/Search.js'

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