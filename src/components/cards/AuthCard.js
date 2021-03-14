import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'

import { Button } from '../common/Button'
import { Message } from '../../components/common/Message'
import { IconEyE } from '../../components/common/IconEyE'
import { Input } from '../common/Input'

import { login } from '../../redux/authAction'
import { showPass, showMessage } from '../../redux/siteAction'


const AuthCardComponent = ({ showMessage, nameButton, isLoginClick, bgImg, login,
	isMessage, isShowPassword, showPass }) => {

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

	const [form, setForm] = useState({
		login: '',
		password: '',
		passwordConfirm: ''
	})

	const onChange = useCallback((event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	})

	const loginHandler = useCallback(async (event) => {
		debugger
		try {
			event.preventDefault()
			const data = await request('http://localhost:5100/api/auth/login', 'POST', { login: form.login, password: form.password })
			login({ data, password: form.password })
		} catch (e) { }
	})

	const registerHandler = async (event) => {
		debugger
		try {
			event.preventDefault()

			if (form.passwordConfirm === form.password) {
				const data = await request('http://localhost:5100/api/auth/register', 'POST', { login: form.login, password: form.password, passwordConfirm: form.passwordConfirm })
				login(data)
			}
			showMessage('Passwords do not match')
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
						{isMessage ? <Message /> :
							<p>
								<NavLink to="/" className="forgot-password">
									{isLoginClick && <span>Forgot password</span>}
								</NavLink>
							</p>
						}
					</div>
					<Button disabled={loading ? "disabled" : false}
						onClick={isLoginClick ? loginHandler : registerHandler}
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
		nameButton: state.auth.nameButton,
		isLoginClick: state.auth.isLoginClick,
		bgImg: state.site.bgImg,
		isMessage: state.site.isMessage,
		isShowPassword: state.site.isShowPassword,
		token: state.auth.token
	}),
	(dispatch) => bindActionCreators({
		showMessage,
		login,
		showPass
	}, dispatch)
)(AuthCardComponent)