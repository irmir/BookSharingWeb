import React from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

// import { WrappedMap } from '../../common/Map.js'
import { Location } from './Location.js'

export const LocationsSection = () => {
    // debugger
    return (
        <section className="rental-locations">
            <div className="rental-locations-header">
                <h3>Rental Locations</h3>
                <button><span>View all</span></button>
            </div>
            
            <Location />
        </section>

        // <div className="rental-locations">
        //     <div className="map">
        //         {/* <WrappedMap
        //             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDIFZ9Kro2Qbq-YY7_5IjZN_KhROwRxI4M`}
        //             loadingElement={<div style= {{ height: `100%` }} />}
        //             containerElement={<div style={{ height: `400px` }} />}
        //             mapElement={<div style={{ height: `100%` }} />}
        //         /> */}
        //     </div>
        //     <div className="data-location">

        //     </div>
        // </div>
    )
}
