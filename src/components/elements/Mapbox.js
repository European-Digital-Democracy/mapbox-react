import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2tmaTd5eHJjMDBuZjJ6cDdoMW92bGdzYSJ9.ku-wJSzHoysxwRbRb6Jq7Q',
});

function Mapbox() {
    return (
        <Map
        // eslint-disable-next-line
            style= {'mapbox://styles/pwestman/ckeg5fy4w2irx19nt12mn7ox4'}
        zoom={[3.8]}
        center={[18.37, 50.86]}
        containerStyle={{
            height: '70vh',
            width: '100vw',
        }}
        >
        </Map>
    )
}

export default Mapbox