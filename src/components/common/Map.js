import React, { useCallback } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getDataLocation} from '../../redux/queryAction'
import { mapStyle } from '../../css/mapStyle'

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
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: 53.903838, lng: 27.581298}}
                zoom={13}
                options={{styles: mapStyle}}
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
        locations: state.query.locations
    }),
    (dispatch) => bindActionCreators({
        getDataLocation
    }, dispatch)
)(MapComponent)