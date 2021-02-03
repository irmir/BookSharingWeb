import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Message } from '../common/Message.js'
import { useHttp } from '../../hooks/http.hook'
import { changeInputValue, showMessage, register, login } from '../../redux/authAction'
import { useAuth } from '../../hooks/auth.hook.js'


const AuthCardComponent = ({ changeInputValue, showMessage, isAuth,
    loginUser, passwordUser, isCardActive, nameButton, urlImg, login,
    textMessage, isMessage }) => {

    const { loading, request, error } = useHttp()

    useEffect(() => {
        if (error) {
            showMessage(error)
        }
    }, [error])

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const loginHandler = async (event) => {
        try {
            event.preventDefault()
            const data = await request('http://localhost:5100/api/auth/login', 'POST', { login: loginUser, password: passwordUser })
            debugger
            login(data)
        } catch (e) { }
    }

    const registerHandler = async (event) => {
        try {
            event.preventDefault()
            const data = request('http://localhost:5100/api/auth/register', 'POST', { login: loginUser, password: passwordUser })
        } catch (e) { }
    }

    return (
        <div className={isCardActive ? "auth-card active" : "auth-card"}
            style={{
                backgroundImage: `url(${urlImg})`,
            }}>
            <div className="inner">
                <form>
                    <div>
                        <input type="email" name="login" placeholder="login" onChange={changeHandler} />
                        <input type="password" name="password" placeholder="password" onChange={changeHandler} />
                        <label id="forgot-password"><input type="checkbox" htmlFor="forgot-password" />
                            {isMessage ?
                                <span>{textMessage}</span>:
                                <span>Forgot password</span>
                            }
                        </label>
                    </div>
                    <button disabled={loading} type="submit" placeholder="логин"
                        onClick={nameButton === "Sign In" ? loginHandler : registerHandler}>{nameButton}</button>
                </form>
                <div className="social-block">

                </div>
            </div>
            <Message />
        </div>
    )
}

export const AuthCard = connect(
    (state) => ({
        isAuth: state.auth.isAuth,
        loginUser: state.auth.login,
        passwordUser: state.auth.password,
        isCardActive: state.auth.isCardActive,
        nameButton: state.auth.nameButton,
        urlImg: state.site.urlImg,
        isError: state.auth.isError,
        textMessage: state.auth.textMessage,
        isMessage: state.auth.isMessage,
    }),
    (dispatch) => bindActionCreators({
        changeInputValue: changeInputValue,
        showMessage: showMessage,
        login: login
    }, dispatch)
)(AuthCardComponent)