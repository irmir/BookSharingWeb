import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Menu } from './Menu'
import { ProfileAvatar } from './ProfileAvatar'
import { Button } from './Button.js'

import { login, showAuthCard } from '../../redux/authAction'

export const HeaderComponent = ({ login, showAuthCard, isAuth }) => {

  useEffect(() => { 
    login()
  })

  const clickHandler = useCallback((event) => {
    showAuthCard(event.target.name)
  })

  return (
    <header>
      <div className="header container">
        <Menu />
        {isAuth ?
          <ProfileAvatar /> :
          <div className="auth-buttons">
            <Button onClick={clickHandler} text="Sign In" name="Sign In"/>
            <Button onClick={clickHandler} text="Sign Up" name="Sign Up"/>
          </div>
        }
      </div>
    </header>
  )
}

export const Header = connect(
    null,
    (dispatch) => bindActionCreators({
      login: login,
      showAuthCard: showAuthCard
    }, dispatch)
  )(HeaderComponent);
