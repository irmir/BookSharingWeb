import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../hooks/http.hook'
import { changeInputValue, showError, login, register } from '../../redux/authAction'

const AuthCardComponent = ({ changeInputValue, showError, register, login, isAuth,
    loginUser, passwordUser, isCardActive, nameButton, urlImg }) => {
    
    const {loading, request, error} = useHttp()

    useEffect(() => {
        showError(error)
    }, error)

    const changeHandler = useCallback((event) => {
        changeInputValue(event)
    })

    const loginHandler = useCallback((event) => {
        event.preventDefault()
        try{
            debugger
            const data = request('/api/auth/login', 'GET', {login:loginUser, password:passwordUser})
            console.log(data)

        } catch(e) {}
    })

    // const loginHandler = useCallback((event) => {
    //     event.preventDefault()
    //     login(loginUser, passwordUser)
    // })

    const registerHandler = useCallback((event) => {
        event.preventDefault()
        try{
            debugger
            const data = request('/api/auth/register', 'POST', {login:loginUser, password:passwordUser})
            console.log(data)

        } catch(e) {}
    })
        

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
                        
                        <label id="forgot-password"><input type="checkbox" htmlFor="forgot-password"/><span>Forgot password</span></label>
                    </div>
                    <button disabled={loading} type="submit" placeholder="логин" 
                            onClick={ nameButton === "Sign In" ? loginHandler: registerHandler}>{nameButton}</button>
                </form>
                <div className="social-block">
                
                </div>
            </div>
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
        urlImg: state.site.urlImg
    }),
    (dispatch) => bindActionCreators({
        changeInputValue: changeInputValue,
        showError: showError
    }, dispatch)
)(AuthCardComponent)