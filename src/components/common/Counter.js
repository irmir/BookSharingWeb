import React from 'react'
import { connect } from 'react-redux'

const CounterComponent = ({numBooks, numUsers, numLocations}) => {

    return (
        <div className="counter">
                <div className="name"><p>Books</p><p>{numBooks}</p></div>
                <div className="name"><p>Users</p><p>{numUsers}</p></div>
                <div className="name"><p>Locations</p><p>{numLocations}</p></div>
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
