import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeInputValue, login } from '../../redux/authAction'

const AuthCardComponent = ({ changeInputValue, login, isAuth,
    loginUser, passwordUser, isCardActive, nameButton }) => {

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const loginHandler = useCallback((event) => {
        event.preventDefault()
        login(loginUser, passwordUser)
    })

    return (
        <div className={isCardActive ? "auth-card active" : "auth-card"}>
            <form>
                <input type="email" name="login" placeholder="login" onChange={changeHandler} />
                <input type="password" name="password" placeholder="password" onChange={changeHandler} />
                <input type="submit" placeholder="логин" onClick={loginHandler} value={nameButton} />
            </form>
        </div>
    )
}

export const AuthCard = connect(
    (state) => ({
        isAuth: state.auth.isAuth,
        loginUser: state.auth.login,
        passwordUser: state.auth.password,
        isCardActive: state.auth.isCardActive,
        nameButton: state.auth.nameButton
    }),
    (dispatch) => bindActionCreators({
        changeInputValue: changeInputValue,
        login: login,
    }, dispatch)
)(AuthCardComponent)