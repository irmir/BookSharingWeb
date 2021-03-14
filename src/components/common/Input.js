import React from 'react'

export const Input = ({type, name, placeholder, onChange, value, disabled, autoFocus,
     myref}) => {

    return (
        <input onChange={onChange} 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                disabled={disabled}
                autoFocus={autoFocus}
                ref={myref}/>
    )

}