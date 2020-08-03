import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiZmxhenphcmluIiwiYSI6ImNrYTNvZGpzeDAwM3MzZm9kZmVxN2Z2aG0ifQ.OQKPzySJ5j1lEVte4NFzaA"

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
            style: 'mapbox://styles/mapbox/streets-v11',
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