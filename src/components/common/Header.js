import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'

import { Menu } from './Menu.js'

import { login, showAuthCard } from '../../redux/authAction.js'
import { bindActionCreators } from 'redux'
import { PopUp } from './PopUp.js'

export const HeaderComponent = ({login, showAuthCard}) => {

    // useEffect(async () => {
    //     login()
    //   }, [login])

    const click = useCallback((event) => {
      showAuthCard(event.target.value)
    })
      
    return (
      <header>
        <div className="header container">
            <Menu />
            <div className="auth-buttons">
                <button onClick={click} value="Sign In" disabled={false} type="button">Sign in</button>
                <button onClick={click} value="Sign Up" disabled={false}>Sign up</button>
            </div>
            <PopUp />
        </div>  
      </header>
    )
}

export const Header = connect(
    null,
    (dispatch) => bindActionCreators({
      showAuthCard: showAuthCard
    }, dispatch)
  )(HeaderComponent);