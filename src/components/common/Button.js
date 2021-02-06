import React from 'react'

export const Button = ({ text, onClick, disabled, className, name }) => {
    
    return (
        <button className={className} onClick={onClick} disabled={disabled} name={name}>
            {text}
        </button>
    )
}