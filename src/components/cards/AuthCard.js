import React, { useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'

import { Button } from '../common/Button'
import { Message } from '../../components/common/Message'
import { IconEyE } from '../../components/common/IconEyE'

import { changeInputValue, showMessage, login } from '../../redux/authAction'
import { showPass } from '../../redux/siteAction'


const AuthCardComponent = ({ changeInputValue, showMessage, loginUser, 
    passwordUser, nameButton, bgImg, login, isMessage, isShowPassword, showPass }) => {

    const { loading, request, error } = useHttp()    
    const authRef = useRef(null)

    useEffect(() => {
        authRef.current.scrollIntoView({ block: "center", behavior: "smooth" })
    }, [])

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
            login(data)
        } catch (e) { }
    }

    const registerHandler = async (event) => {
        try {
            event.preventDefault()
            const data = request('http://localhost:5100/api/auth/register', 'POST', { login: loginUser, password: passwordUser })
        } catch (e) { }
    }

    const showPassword = () => {
        showPass()
    }

    return (
        <div ref={authRef}
            className="auth-card"
            style={{ backgroundImage: `url(./img/${bgImg})` }}>
            <div className="form">
                <form>
                    <div className="inputs">
                        <input type="email" name="login" placeholder="Email/Phone" onChange={changeHandler} />
                        <input type={isShowPassword ? "text": "password" } name="password" placeholder="Password" onChange={changeHandler} />
                        <IconEyE className="eye" onClick={showPassword} isShowPassword={isShowPassword}/>
                        {isMessage ? <Message /> :
                            <p><NavLink to="/" className="forgot-password"><span>Forgot password</span></NavLink></p>
                        }
                    </div>
                    <Button disabled={loading ? "disabled" : false}
                        onClick={nameButton === "Sign In" ? loginHandler : registerHandler}
                        text={nameButton}
                    />
                </form>
                <div className="social-block">

                </div>
            </div>
        </div>
    )

}

export const AuthCard = connect(
    (state) => ({
        loginUser: state.auth.login,
        passwordUser: state.auth.password,
        nameButton: state.auth.nameButton,
        bgImg: state.site.bgImg,
        isMessage: state.auth.isMessage,
        isShowPassword: state.site.isShowPassword
    }),
    (dispatch) => bindActionCreators({
        changeInputValue,
        showMessage,
        login,
        showPass,
    }, dispatch)
)(AuthCardComponent)