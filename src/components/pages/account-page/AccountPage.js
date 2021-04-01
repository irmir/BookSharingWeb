import React from 'react'
import { connect } from 'react-redux'

import { AccountCard } from './AccountCard'
import { BookInfo } from './BookInfo'
import { Header } from '../../common/Header'

import bg from '../../../image/bg-account.jpg'

const AccountPageComponent = ({ profileData }) => {

    return (
            <div className="backround" style={profileData && { backgroundImage: `url(${bg})` }}>
                <Header />
                {
                    profileData ?
                        <section className="container account">
                            <AccountCard />
                            <BookInfo />
                        </section>: <div className="empty-block"></div>
                }
            </div>
    )
}

export const AccountPage = connect(
    (state) => ({
        profileData: state.user.profileData
    })
)(AccountPageComponent)