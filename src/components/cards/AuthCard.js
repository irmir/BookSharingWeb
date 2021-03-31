import React, { useEffect, useRef, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'

import { Button } from '../common/Button'
import { Message } from '../../components/common/Message'
import { IconEyE } from '../../components/common/IconEyE'
import { Input } from '../common/Input'

import { hideAuthCard, login } from '../../redux/authAction'
import { showPass } from '../../redux/siteAction'


const AuthCardComponent = ({ showMessage, nameButton, isLoginClick, bgImg, login, isShowPassword,
	showPass, hideAuthCard }) => {

	const { loading, request } = useHttp()

	const authRef = useRef(null)

	useEffect(() => {
		authRef.current.scrollIntoView({ block: "center", behavior: "smooth" })
	})

	const [form, setForm] = useState({
		login: '',
		password: '',
		passwordConfirm: ''
	})

	const onChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const [error, setError] = useState(null)

	const loginHandler = async (event) => {

		try {
			event.preventDefault()
			const data = await request('http://localhost:5100/api/auth/login', 'POST', { login: form.login, password: form.password })
			login({ data, password: form.password })
			
		} catch (e) {
			setError(e.message)
		}
	}

	const registerHandler = async (event) => {
debugger
		try {
			event.preventDefault()

			if (form.passwordConfirm === form.password) {
				const data = await request('http://localhost:5100/api/auth/register', 'POST', { login: form.login, password: form.password, passwordConfirm: form.passwordConfirm })
				login({ data, password: form.password })
			}
			showMessage('Passwords do not match')
		} catch (e) {
			debugger
			setError(e.message)
		}
	}

	const showPassword = () => {
		showPass()
	}

	const clickOutsideHandler = useCallback((event) => {
		if ((event.target !== authRef.current) && !authRef.current.contains(event.target)) {
			hideAuthCard()
		}
	}, [hideAuthCard])

	useEffect(() => {
		window.addEventListener('click', clickOutsideHandler, true)

		return () => window.removeEventListener('click', clickOutsideHandler, true)
	}, [clickOutsideHandler])

	return (
		<div ref={authRef}
			className={window.location.pathname !== "/" ? "auth-card marker" : "auth-card"}
			style={{ backgroundImage: `url(./img/${bgImg})` }}>
			<div className="form">
				<form>
					<div className="inputs">
						<Input
							onChange={onChange} type="email" name="login"
							placeholder="Email/Phone" value={form.login} />
						<Input
							onChange={onChange} type={isShowPassword ? "text" : "password"}
							name="password" placeholder="Password" value={form.password} />
						{
							!isLoginClick &&
							<Input
								onChange={onChange} type={isShowPassword ? "text" : "password"}
								name="passwordConfirm" placeholder="Confirn Password"
								value={form.passwordConfirm} />
						}
						<IconEyE className="eye" onClick={showPassword} isShowPassword={isShowPassword} />
						{error ? <Message text={error} /> :
							<p>
								<NavLink to="/" className="forgot-password">
									{isLoginClick && <span>Forgot password</span>}
								</NavLink>
							</p>
						}
						<Button disabled={loading ? "disabled" : false}
							onClick={isLoginClick ? loginHandler : registerHandler}
							text={nameButton}
						/>
					</div>
				</form>
				<div className="social-block">

				</div>
			</div>
		</div>
	)
}

export const AuthCard = connect(
	(state) => ({
		nameButton: state.auth.nameButton,
		isLoginClick: state.auth.isLoginClick,
		bgImg: state.site.bgImg,
		isMessage: state.site.isMessage,
		isShowPassword: state.site.isShowPassword,
		token: state.auth.token
	}),
	(dispatch) => bindActionCreators({
		login,
		showPass,
		hideAuthCard
	}, dispatch)
)(AuthCardComponent)