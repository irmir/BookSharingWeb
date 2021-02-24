import React from 'react'
import { Map } from '../../common/Map.js'
import { InfoLocation } from '../../common/InfoLocation.js'


export const Location = () => {

    return (
        <div className="container">
            <div className="wrapper">
                <Map />
                <InfoLocation />
            </div>
        </div>
    )
}
