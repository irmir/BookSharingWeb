import React from 'react'
import { Map } from './Map.js'
import { InfoLocation } from './InfoLocation.js'


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
