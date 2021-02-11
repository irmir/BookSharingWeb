import React from 'react'

export const Input = ({type, name, placeholder, onChange}) => {

    return (
        <input onChange={onChange} type={type} name={name} placeholder={placeholder}/>
    )

}