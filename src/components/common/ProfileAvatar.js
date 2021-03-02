import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../hooks/http.hook.js'

import { logout } from '../../redux/authAction.js'
import { setUserData } from '../../redux/userAction'

const ProfileAvatarComponent = ({ logout, token, setUserData, nameUser, id, email }) => {

    const { request } = useHttp()

    useEffect(() => {
        const getUserData = async() =>{
            const data = await request(`http://localhost:5100/api/users/${id}`, 'GET', null, { Authorization: `Bearer ${token}` })
            setUserData(data)
        }
        getUserData()
    }, [])

    const logoutHandler = useCallback(() => {
        logout()
    })
    return (
        <div className="profile-avatar">
            <div className="name">
                {
                    nameUser ?
                    <>
                        <p>{nameUser}</p>
                        {/* <p>{nameUser.lastName}</p> */}
                    </>:
                    <p>{email}</p>
                }

            </div>
            <div className="avatar">
                <img src="./img/avatar.jpg" alt="name user"></img>
            </div>
            <div onClick={logoutHandler} className="logout">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19l1-1h6V6h-6a1 1 0 010-2h6l2 2v12l-2 2h-6l-1-1z" fill="#fff" fill-opacity=".6" />
                    <path d="M16 13l-1 1h-5v1l-1 1-5-3v-2l5-3 1 1v1h5l1 1v2z" fill="#fff" fill-opacity=".6" />
                </svg>
            </div>
        </div>
    )
}

export const ProfileAvatar = connect(
    (state) => ({
        nameUser: state.query.nameUser,
        lastNameUser: state.query.lastNameUser,
        img: state.query.img,
        token: state.auth.token,
        id: state.auth.id,
        email: state.user.email
    }),
    (dispatch) => bindActionCreators({
        logout,
        setUserData,
    }, dispatch)
)(ProfileAvatarComponent)

