import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideMessage } from '../../redux/siteAction'

const MessageComponent = ({ textMessage, hideMessage }) => {

    const clickOutsideHandler = useCallback(() => {
        hideMessage()
    },[hideMessage])

    useEffect(() => {
        window.addEventListener('click', clickOutsideHandler, true)

        return () => window.removeEventListener('click', clickOutsideHandler, true)
    }, [clickOutsideHandler])

    return (
        <p className="error">
            {textMessage}
        </p>
    )
}

export const Message = connect(
    (state) => ({
        textMessage: state.site.textMessage,
    }),
    (dispatch) => bindActionCreators({
        hideMessage
    }, dispatch)
)(MessageComponent)