import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchBook, showPopUp } from '../../redux/queryAction.js'

const PopUpComponent = ({searchContent, activePopUp, searchBook, showPopUp}) => {

    // useEffect(() => {
    //     debugger
    //     showPopUp(searchContent)
    // }, [searchBook])
    debugger
    return (
        <div className={ activePopUp ? "pop-up active": "pop-up"}>
            {searchContent}
        </div>
    )
}

export const PopUp = connect(
    (state) => ({
        searchContent: state.query.searchContent,
        activePopUp: state.query.activePopUp,
    }),
    (dispatch) => bindActionCreators({
       searchBook: searchBook,
        showPopUp: showPopUp
    }, dispatch)
)(PopUpComponent)