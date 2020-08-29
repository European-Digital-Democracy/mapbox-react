import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2tlZmxhaG4wMWRsYzJzbWlpZTVhbWl1eCJ9.ZqGDwQ8qHtXLgNY4tWIFMg'
});

function Mapbox() {
    return (
        <Map
            style="mapbox://styles/pwestman/ckeg5fy4w2irx19nt12mn7ox4"
            containerStyle={{
                height: '70vh',
                width: '90vw',
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[5.35, 51.3233379650232]} />
            </Layer>
        </Map>
    )
}

export default Mapbox