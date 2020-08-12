import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoicHdlc3RtYW4iLCJhIjoiY2s4MGQ2NGFuMGVrMDNkcnVwdWxtZGp3cSJ9.ZjCCygV_IlZ9MvMbafseBQ"

class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/pwestman/ckdr8t7kk0qr519pinc3gujg3',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            // <div className="hero section center-content">
                <div className="container-sm">
                    <div className="hero-inner section-inner">
                        <div className="hero-content">
                            <div className="mt-0 mb-16">
                                <div ref={el => this.mapContainer = el} className="mapContainer illustration-section-01" />
                                </div>
                                
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
// ReactDOM.render(<Application />, document.getElementById('app'));

export default Mapbox;