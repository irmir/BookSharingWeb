import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hideMessage } from '../../redux/authAction.js'

const MessageComponent = ({ textMessage, isMessage, hideMessage }) => {

    debugger

    const clickOutsideHandler = useCallback(() => {
        hideMessage()
    })

    useEffect(() => {
        if (!isMessage) {
            return 
        }
        debugger
        window.addEventListener('click', clickOutsideHandler, true)

        return () => window.removeEventListener('click', clickOutsideHandler, true)
    }, [clickOutsideHandler])
    

    return (
        <>
        {isMessage && 
            <div className="message">
                {textMessage}
            </div>
        }
        </>
    )
}

export const Message = connect(
    (state) => ({
        textMessage: state.auth.textMessage,
        isMessage: state.auth.isMessage,
    }),
    (dispatch) => bindActionCreators({
        hideMessage: hideMessage
    }, dispatch)
)(MessageComponent)