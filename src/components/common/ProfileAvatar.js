import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../hooks/http.hook.js'

import { logout } from '../../redux/authAction.js'
import { setUserData } from '../../redux/userAction'

import ava from '../../image/ava3.jpg'

const ProfileAvatarComponent = ({ logout, setUserData, profileData, authData }) => {

    const { request } = useHttp()
    debugger
    useEffect(() => {
        if (!profileData) {
            (async function getUserData() {
                const data = await request(`http://localhost:5100/api/users/${authData.id}`, 'GET', null, { Authorization: `Bearer ${authData.token}` })
                setUserData(data)
            })()
        }
    }, [setUserData])

    const logoutHandler = () => {
        logout()
    }

    if (!profileData) {
        return null
    }

    return (
        <div className="profile-avatar">
            <div className="name">
                <p>{profileData.nickName || profileData.email}</p>
            </div>
            <div className="avatar">
                <img src={profileData.avatar ? `data:image/gif;base64,${profileData.avatar}`: ava} alt="name user"></img>
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
        profileData: state.user.profileData,
        authData: state.auth.authData
    }),
    (dispatch) => bindActionCreators({
        logout,
        setUserData,
    }, dispatch)
)(ProfileAvatarComponent)

