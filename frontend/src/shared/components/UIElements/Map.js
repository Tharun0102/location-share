import React from 'react';
import GoogleMapReact from 'google-map-react';


import './styles/Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 13.662255746981536,
            lng: 78.94487410603496
        },
        zoom: 9
    };

    return (
        // Important! Always set the container height explicitly
        <div className="map-container" style={{
            height: '50vh', width: '90%'
        }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBwf0nwrB3Vrm4AoiLwe2V6D5Cjc7xvQRo" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={13.662255746981536}
                    lng={78.94487410603496}
                    text="🚩"
                />
            </GoogleMapReact>
        </div >
    );

}

export default Map;














// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

// function Map() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyBwf0nwrB3Vrm4AoiLwe2V6D5Cjc7xvQRo"
//     })

//     // const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds();
//         map.fitBounds(bounds);
//         // setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         // setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             { /* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

// export default Map;