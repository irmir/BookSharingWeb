import React from 'react'
import { connect } from 'react-redux'

import { AccountCard } from './AccountCard'
import { BookInfo } from './BookInfo'
import { Header } from '../../common/Header'

import bg from '../../../image/bg-account.jpg' 

const AccountPageComponent = ({ profileData }) => {

    return (
        <>
            {
                profileData ?
                    <div className="backround" style={{backgroundImage: `url(${bg})`}}>
                        <Header />
                        <section className="container account">
                            <AccountCard profileData={profileData} />
                            <BookInfo />
                        </section>
                    </div>: null
            }

        </>
    )
}

export const AccountPage = connect(
    (state) => ({
        profileData: state.user.profileData
    })
)(AccountPageComponent)