import React from 'react'
import { connect } from 'react-redux'

import { Logo } from './Logo';
import { SocialNetwork } from './SocialNetwork.js'

import { NavLink } from 'react-router-dom';

const FooterComponent = ({ email }) => {

    return (
        <div className="footer">
            <div className="wrapper container">
                {/* <button className="btn-footer-head">
                </button> */}
                <div className="btn-footer-head">
                    <span>
                        <NavLink to="/about">About us</NavLink>
                    </span>
                    <button className="button">
                </button>

                </div>
                <div className="wrapper">
                    <Logo width="450" height="80" />
                    <SocialNetwork />
                    <p>{email}</p>
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