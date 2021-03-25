import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import { MainPage } from '../components/pages/main-page/MainPage'
import { AccountPage } from './pages/account-page/AccountPage'
import { LibraryPage } from '../components/pages/LibraryPage'
import { SettingsPage } from '../components/pages/SettingsPage'
import { About } from '../components/pages/About'
import { Footer } from '../components/common/Footer'
import { connect } from 'react-redux'


const MainRoutesComponent = () => {

    return (
        <BrowserRouter>
                <Route path="/" exact component={MainPage} />
                <Route path="/account" component={AccountPage} />
                <Route path="/library" component={LibraryPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="/about" component={About} />
                <Footer />
        </BrowserRouter>
    )
}

export const MainRoutes = connect(
    (state) => ({
        isAccountPage: state.site.isAccountPage
    })
)(MainRoutesComponent)