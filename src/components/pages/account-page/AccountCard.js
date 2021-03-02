import React, { useState, useRef, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

import { Input } from '../../common/Input'
import { Button } from '../../common/Button'

import { useHttp } from '../../../hooks/http.hook'

import bg from '../../../image/bg-acount-header.jpg'
import ava from '../../../image/avatar-account.png'

import { changeInputValue, changeDisabled } from '../../../redux/siteAction'
import { bindActionCreators } from 'redux'

const AccountCardComponent = ({ quoteAccount, authorQuoteAccount,
    id, password, formData, changeDisabled, changeInputValue,
    nameUser, email, phoneNumber, avatar, token }) => {
    debugger
    const { request } = useHttp()

    const [isDisable, setDisable] = useState(true)
    const [inputName, setInputName] = useState(null)

    const formRef = useRef(null)

    useEffect(() => {
        debugger
        console.log(inputName)
        if (!isDisable) {
            formRef.current.elements[inputName][0].focus()
            formRef.current.elements[inputName][0].placeholder = " "
        }
    }, [isDisable])


    const editDataUserHandler = async (event) => {
        debugger
        event.preventDefault()
        setDisable(false)
        setInputName(event.target.name)
        changeDisabled(event.target.name)
    }

    const setDataUser = async (photo) => {
        debugger
        const dataUser = new FormData(formRef.current)
        console.log(dataUser)

        dataUser.append('Avatar', photo)
        
        console.log(dataUser)
        
        const data = await request(`http://localhost:5100/api/users/${id}`, 'PUT', dataUser,
         { 'Content-Type': 'multipart/form data', Authorization: `Bearer ${token}` })
    }

    const changeHandler = useCallback((event) => {
        debugger
        changeInputValue(event)
    })

    const setPhotoHandler = useCallback(async (event) => {
        debugger

        if (event.target.files.length) {
            setDataUser(event.target.files[0])
            console.log(event.target.files[0])
        }
    })

    return (
        <div className="account-card">
            <div className="header-account" style={{ background: `url(${bg})` }}>
                <p>
                    <span>{quoteAccount[0]}</span>
                    <span>{quoteAccount[1]}</span>
                </p>
                <p>{authorQuoteAccount}</p>
                <div className="photo">
                    <img src={avatar || ava}></img>
                    <div className="avatar">
                        <label for="photo" title="hgfjghfj">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.38121 2.50347C3.38121 1.29963 4.35711 0.32373 5.56094 0.32373H7.48074C8.68463 0.32373 9.66052 1.29963 9.66052 2.50347C9.66052 2.51376 9.66842 2.52233 9.67869 2.52316L11.2252 2.64877C11.918 2.70503 12.4877 3.21731 12.617 3.90022C12.947 5.64286 12.9716 7.42962 12.6897 9.18065L12.6223 9.59975C12.4951 10.3897 11.8449 10.9908 11.0474 11.0556L9.70012 11.165C7.58409 11.3368 5.45766 11.3368 3.34162 11.165L1.99434 11.0556C1.1968 10.9908 0.546602 10.3897 0.41945 9.59975L0.351993 9.18065C0.0701449 7.42962 0.0947484 5.64286 0.424701 3.90022C0.554003 3.21731 1.12374 2.70503 1.8165 2.64877L3.36304 2.52316C3.37331 2.52233 3.38121 2.51376 3.38121 2.50347ZM6.52088 3.61854C5.08429 3.61854 3.91971 4.78309 3.91971 6.2197C3.91971 7.6563 5.08429 8.82086 6.52088 8.82086C7.95748 8.82086 9.12204 7.6563 9.12204 6.2197C9.12204 4.78309 7.95748 3.61854 6.52088 3.61854Z" fill="white" fill-opacity="0.5" />
                            </svg>
                        </label>
                        <input onChange={setPhotoHandler} type="file" id="photo" title="Change photo"></input>
                    </div>

                </div>
            </div>
            <form ref={formRef}>
                <ul className="data-account">
                    {
                        formData.map((item) => (
                            <li>
                                <label>{item.label}</label>
                                <Input onChange={changeHandler} name={item.inputName}
                                    value={item.inputName === "name" ? nameUser :
                                        item.inputName === "id" ? id :
                                            item.inputName === "phone" ? phoneNumber :
                                                item.inputName === "email" ? email :
                                                    item.inputName === "password" ? password :
                                                        ""
                                    } type={item.type} disabled={item.disabled} placeholder={item.placeholder} />
                                <Button onClick={editDataUserHandler} text={item.inputName === "id" ? "" : item.disabled ? "Edit" : "Save"} name={item.inputName} />
                            </li>
                        ))
                    }
                </ul>
            </form>
            <div className="my-books">

            </div>
        </div>
    )
}

export const AccountCard = connect(
    (state) => ({
        quoteAccount: state.site.quoteAccount,
        authorQuoteAccount: state.site.authorQuoteAccount,
        formData: state.site.formData,
        nameUser: state.user.nameUser,
        avatar: state.site.avatar,
        email: state.user.email,
        phoneNumber: state.site.phoneNumber,
        password: state.site.password,
        token: state.auth.token,
        id: state.auth.id,
    }),
    (dispatch) => bindActionCreators({
        changeInputValue,
        changeDisabled
    }, dispatch)
)(AccountCardComponent)