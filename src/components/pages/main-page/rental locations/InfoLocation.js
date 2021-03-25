import React from 'react'
import { connect } from 'react-redux'

const InfoLocationComponent = ({ location }) => {

    return (
        <div className="info-block">
            <div className="img">
                <img src="./img/library.jpg" alt={location.name} />
            </div>
            <div className="info">
                {location.name}
            </div>
        </div>
    )
}

export const InfoLocation = connect(
    (state) => ({
        location: state.query.location
    })
)(InfoLocationComponent)