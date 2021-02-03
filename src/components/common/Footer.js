import React from 'react'
import { connect } from 'react-redux'

import { Logo } from './Logo';
import { SocialNetwork } from './SocialNetwork.js'

import { NavLink } from 'react-router-dom';

const FooterComponent = ({ email }) => {

    return (
        <div className="footer">
            <div className="wrapper container">
                <button>
                    <span>
                        <NavLink to="/about">About us</NavLink>
                    </span>
                </button>
                <div className="wrapper">
                    <Logo width="450" height="80" />
                    <SocialNetwork />
                    <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
            </div>
        </div>
    )
}

export const Footer = connect(
    (state) => ({
        email: state.site.email
    })
)(FooterComponent)