import React from 'react'
import { connect } from 'react-redux'

// import { numBooks, numUsers, numLocations } from '../../redux/siteReducer.js'

const CounterComponent = ({numBooks, numUsers, numLocations}) => {

    return (
        <div className="counter">
            {/* <div className="wrapper"> */}
                <div className="name"><p>Books</p><p>{numBooks}</p></div>
                <div className="name"><p>Users</p><p>{numUsers}</p></div>
                <div className="name"><p>Locations</p><p>{numLocations}</p></div>
            {/* </div> */}
        </div>
    )
}

export const Counter = connect(
    (state) => ({
        numBooks: state.site.numBooks,
        numUsers: state.site.numUsers,
        numLocations: state.site.numLocations
    })
)(CounterComponent)
