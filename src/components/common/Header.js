import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Menu } from './Menu'
import { ProfileAvatar } from './ProfileAvatar'
import { Button } from './Button'

import { login, showAuthCard } from '../../redux/authAction'
import { setUserData } from '../../redux/userAction'

export const HeaderComponent = ({ login, setUserData, showAuthCard, isAuth }) => {

  useEffect(() => {
    login()
    setUserData()
  }, [login, setUserData])

  const onClick = (event) => {
    showAuthCard(event.target.name)
  }

  return (
    <header >
      <div className="header container">
        <Menu />
        {isAuth ?
          <ProfileAvatar /> :
          <div className="auth-buttons">
            <Button onClick={onClick} text="Sign In" name="Sign In" />
            <Button onClick={onClick} text="Sign Up" name="Sign Up" />
          </div>
        }
      </div>
    </header>
  )
}

export const Header = connect(
  (state) => ({
    isAuth: state.auth.isAuth,
  }),
  (dispatch) => bindActionCreators({
    login,
    setUserData,
    showAuthCard
  }, dispatch)
)(HeaderComponent);
