import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { Header } from '../components/common/Header'
import { MainPage } from '../components/pages/main-page/MainPage'
import { AccountPage } from './pages/account-page/AccountPage'
import { LibraryPage } from '../components/pages/LibraryPage'
import { SettingsPage } from '../components/pages/SettingsPage'
import { About } from '../components/pages/About'
import { Footer } from '../components/common/Footer'
import { connect } from 'react-redux'

import bg from '../image/bg-acount-header.jpg'


const MainRoutesComponent = ({isAccountPage}) => {

    return (
        <BrowserRouter>
            <div style={isAccountPage ? {
                backgroundImage:`url(${bg})`, 
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom 0 right 0"
                }: {backgroundImage: 'none'}} className="inner">
                <Header />
                <Route path="/" exact component={MainPage} />
                <Route path="/account" component={AccountPage} />
                <Route path="/library" component={LibraryPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="/about" component={About} />
            </div>
                <Footer />
        </BrowserRouter>
    )
}

export const MainRoutes = connect(
    (state) => ({
        isAccountPage: state.site.isAccountPage
    })
)(MainRoutesComponent)