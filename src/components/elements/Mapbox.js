import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2tlZmxhaG4wMWRsYzJzbWlpZTVhbWl1eCJ9.ZqGDwQ8qHtXLgNY4tWIFMg',
});

function Mapbox() {
    return (
        <Map
            style="mapbox://styles/pwestman/ckeg6d7d62jod19lz0lczn8mm"
            containerStyle={{
                height: '70vh',
                width: '90vw',
            }}
        >
        </Map>
    )
}

export default Mapbox