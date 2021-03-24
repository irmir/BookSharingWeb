import React from 'react'

import { AccountCard } from './AccountCard'
import { BookInfo } from './BookInfo'

export const AccountPage = () => {

    return (
        <section className="container account">
            <AccountCard />
            <BookInfo />
        </section>
    )
}