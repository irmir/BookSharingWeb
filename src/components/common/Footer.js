import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import { SocialNetwork } from './SocialNetwork'
import { AuthCard } from '../cards/AuthCard'

const FooterComponent = ({ email, isCardActive }) => {

    return (
        <div className="footer">
            <div className="about-us container">
                <NavLink to="/about" className="a-about">
                    <span>About us</span>
                </NavLink>
                <div className="wrapper">
                    <Logo width="450" height="80" />
                    <SocialNetwork />
                    <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
            </div>
            {isCardActive && <AuthCard />}
        </div>
    )
}

export const Footer = connect(
    (state) => ({
        email: state.site.email,
        isCardActive: state.auth.isCardActive
    })
)(FooterComponent)