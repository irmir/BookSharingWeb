import React, { useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../../hooks/http.hook'

import { Input } from '../../common/Input'
import { Button } from '../../common/Button'
import { Slider } from '../../common/Slider'

import bg from '../../../image/bg-acount-header.jpg'
import ava from '../../../image/ava3.jpg'

import { changeDisabled } from '../../../redux/siteAction'
import { updateProfileData } from '../../../redux/userAction'

const testBookColection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const AccountCardComponent = ({ quoteAccount, authorQuoteAccount,
    inputs, changeDisabled, authData, profileData, updateProfileData }) => {
    debugger
    const { request } = useHttp()

    const formRef = useRef(null)

    const [form, setForm] = useState({
        nickName: "",
        email: "",
        phoneNumber: "",
        // password: "",
    })

    useEffect(() => {
        if (profileData) {
            setForm({
                nickName: profileData.nickName,
                email: profileData.email,
                phoneNumber: profileData.phoneNumber,
                // password: profileData.password
            })
        }
    }, [profileData])

    const [isDisable, setDisable] = useState(true)
    const [editInputName, setEditInputName] = useState(null)
    const [isInputEmpty, setIsInputEmpty] = useState(true)

    useEffect(() => {
        if (!isDisable) {
            formRef.current.elements[editInputName][0].focus()
        }
    }, [isDisable])

    const editUserData = (event) => {
        debugger
        event.preventDefault()
        setDisable(!isDisable)
        setEditInputName(event.target.name)
        changeDisabled(event.target.name)
    }

    const createFormData = (inputName, inputValue) => {
        const formData = new FormData()
        formData.append(inputName, inputValue)
        formData.append("userTypeId", profileData.userTypeId)
        return formData
    }

    const putUserAvatar = async (event) => {
        event.preventDefault()
        
        const formData = createFormData(event.target.name, event.target.files[0])
        const result = await request(`http://localhost:5100/api/users/${authData.id}`, 'PUT', formData,
            { Authorization: `Bearer ${authData.token}` })

        if (result) {
            updateProfileData({
                 inputName: event.target.name, 
                 inputValue: event.target.files[0]})
        } else {
            console.log('error')
        }
    }

    const putUserData = async (event) => {
        debugger
        event.preventDefault()
        setIsInputEmpty(!isInputEmpty)
        setDisable(!isDisable)

        const inputName = event.target.name
        const inputValue = formRef.current.elements[inputName][0].value

        const formData = createFormData(inputName, inputValue )

        const result = await request(`http://localhost:5100/api/users/${authData.id}`, 'PUT', formData,
            { Authorization: `Bearer ${authData.token}` })

        if (result) {
            debugger
            updateProfileData({ inputName, inputValue})
            changeDisabled(inputName)
        } else {
            console.log('error')
        }
    }

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const [isActiveTab, setIsActiveTab] = useState(true)

    const onClick = () => {
        setIsActiveTab(!isActiveTab)
    }

    return (
        <div className="account-card">
            <div className="header-account" style={{ background: `url(${bg})` }}>
                <p>
                    <span>{quoteAccount[0]}</span>
                    <span>{quoteAccount[1]}</span>
                    <span>{authorQuoteAccount}</span>
                </p>
                <div className="photo">
                    <img src={profileData.avatar && profileData.avatar !== "data:image/gif;base64," ? profileData.avatar : ava} alt="avatar"></img>
                    <div className="avatar">
                        <label htmlFor="photo" title="Change photo">
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.38121 2.50347C3.38121 1.29963 4.35711 0.32373 5.56094 0.32373H7.48074C8.68463 0.32373 9.66052 1.29963 9.66052 2.50347C9.66052 2.51376 9.66842 2.52233 9.67869 2.52316L11.2252 2.64877C11.918 2.70503 12.4877 3.21731 12.617 3.90022C12.947 5.64286 12.9716 7.42962 12.6897 9.18065L12.6223 9.59975C12.4951 10.3897 11.8449 10.9908 11.0474 11.0556L9.70012 11.165C7.58409 11.3368 5.45766 11.3368 3.34162 11.165L1.99434 11.0556C1.1968 10.9908 0.546602 10.3897 0.41945 9.59975L0.351993 9.18065C0.0701449 7.42962 0.0947484 5.64286 0.424701 3.90022C0.554003 3.21731 1.12374 2.70503 1.8165 2.64877L3.36304 2.52316C3.37331 2.52233 3.38121 2.51376 3.38121 2.50347ZM6.52088 3.61854C5.08429 3.61854 3.91971 4.78309 3.91971 6.2197C3.91971 7.6563 5.08429 8.82086 6.52088 8.82086C7.95748 8.82086 9.12204 7.6563 9.12204 6.2197C9.12204 4.78309 7.95748 3.61854 6.52088 3.61854Z" fill="white" fillOpacity="0.5" />
                            </svg>
                        </label>
                        <Input onChange={putUserAvatar}
                            type="file"
                            name="avatar"
                            id="photo"
                            title="Change photo"
                        />
                    </div>
                </div>
            </div>
            <form ref={formRef}>
                <ul className="data-account">
                    {
                        inputs.map((item) => (
                            <li key={item.label.toString()}>
                                <label>{item.label}</label>
                                <Input onChange={onChange} name={item.inputName}
                                    className={(profileData[item.inputName] === null && isInputEmpty) || !item.disabled ? "empty-input" : ""}
                                    value={item.inputName === "nickName" ? form.nickName :
                                        item.inputName === "id" ? authData.id :
                                            item.inputName === "phoneNumber" ? form.phoneNumber :
                                                item.inputName === "email" ? form.email :
                                                    item.inputName === form.password}
                                    type={item.type} disabled={item.disabled} />
                                {item.inputName !== "id" &&
                                    <Button onClick={item.disabled ? editUserData : putUserData}
                                        text={item.disabled ? "Edit" : "Save"}
                                        name={item.inputName} />
                                }

                            </li>
                        ))
                    }
                </ul>
            </form>
            <div className="my-books">
                <div className="tabs">
                    <Button onClick={onClick} className={isActiveTab ? "active-tab": ""} disabled={isActiveTab} />
                    <p className="text-for-button">my books</p>
                    <Button onClick={onClick} className={!isActiveTab ? "active-tab": ""} disabled={!isActiveTab} />
                    <p className="text-for-button">liked</p>
                </div>
                <div className="slider">
                    <Slider bookColection={testBookColection} />
                </div>
            </div>
        </div>
    )
}

export const AccountCard = connect(
    (state) => ({
        quoteAccount: state.site.quoteAccount,
        authorQuoteAccount: state.site.authorQuoteAccount,
        inputs: state.site.inputs,
        authData: state.auth.authData,
        profileData: state.user.profileData
    }),
    (dispatch) => bindActionCreators({
        changeDisabled,
        updateProfileData,
    }, dispatch)
)(AccountCardComponent)