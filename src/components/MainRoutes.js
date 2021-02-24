import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { Header } from '../components/common/Header'
import { MainPage } from '../components/pages/main-page/MainPage'
import { AccountPage } from '../components/pages/AccountPage'
import { LibraryPage } from '../components/pages/LibraryPage'
import { SettingsPage } from '../components/pages/SettingsPage'
import { About } from '../components/pages/About'
import { Footer } from '../components/common/Footer'


export const MainRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={MainPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/library" component={LibraryPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/about" component={About} />
            <Footer />
        </BrowserRouter>
    )
}