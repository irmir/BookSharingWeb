import React, { useCallback } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getDataLocation} from '../../redux/siteAction.js'
import *as mapStyle from '../../css/mapStyle.js'

const containerStyle = {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px"
};

const MapComponent = ({locations, getDataLocation}) => {

    const clickMarker = useCallback((library) => () => {
        debugger
        getDataLocation(library)
    }) 

    return (
        <LoadScript preventGoogleFonts
            googleMapsApiKey="AIzaSyDIFZ9Kro2Qbq-YY7_5IjZN_KhROwRxI4M"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: 53.903838, lng: 27.581298}}
                zoom={13}
                defaultOptions={{styles: mapStyle}}
            >
                {
                    locations.map((library) => (
                        <Marker onClick={clickMarker(library)} 
                                key={library.id} 
                                position={{lat: library.coord[0], lng:library.coord[1]}}
                                icon={{url: './img/marker.svg'}}/>
                    ))                    
                }

            </GoogleMap>
        </LoadScript>
    )
}

export const Map = connect(
    (state) => ({
        locations: state.site.locations
    }),
    (dispatch) => bindActionCreators({
        getDataLocation
    }, dispatch)
)(MapComponent)