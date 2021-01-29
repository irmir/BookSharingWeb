import React from 'react' 
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'


const libraries = ["places"]

export const Map = () => {
    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey: "AIzaSyDIFZ9Kro2Qbq-YY7_5IjZN_KhROwRxI4M", 
    //     libraries  
    // })

    // if (loadError) return "ERRRRROr"
    // if (isLoaded) return "YEES"
    // debugger
    return (
        <div className="map">
            
        </div>
        // <GoogleMap
        //             mapContainerClassName="my-map"
        //             zoom={10}
        //             center={{ lat: -34.397, lng: 150.644 }}
        //         /> 
    )
} 

// export const WrappedMap = withScriptjs(withGoogleMap(Map))