import React from 'react'

export const Input = ({type, name, placeholder, onChange, value, disabled, autoFocus,
     myref, className, id, title, onKeyPress}) => {

    return (
        <input onChange={onChange} 
                onKeyPress={onKeyPress}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                disabled={disabled}
                autoFocus={autoFocus}
                ref={myref}
                className={className}
                id={id}
                title={title}/>
    )

}