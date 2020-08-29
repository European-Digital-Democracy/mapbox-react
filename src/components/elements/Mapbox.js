import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2s4MGQ2NGFuMGVrMDNkcnVwdWxtZGp3cSJ9.ZjCCygV_IlZ9MvMbafseBQ'
});

function Mapbox() {
    return (
        <Map
            style="mapbox://styles/pwestman/ckefir9hm1ww319lzg43rtn4t"
            containerStyle={{
                height: '70vh',
                width: '100vw',
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[2.35, 51.3233379650232]} />
            </Layer>
        </Map>
    )
}

export default Mapbox