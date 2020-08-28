import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2s4MGQ2NGFuMGVrMDNkcnVwdWxtZGp3cSJ9.ZjCCygV_IlZ9MvMbafseBQ'
});

function Mapbox() {
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '50vh',
                width: '50vw'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    )
}

export default Mapbox