import React from 'react'

import {Logo} from '../common/Logo.js'
import { Salutation } from '../common/Salutation.js'
import {Search} from '../common/Search.js'

export const MainPage = () => {

    return (
        <>
            <Logo />
            <Search />
            <Salutation />
        </>
    )
}