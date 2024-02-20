mapboxgl.accessToken = 'pk.eyJ1Ijoia2NoZ28iLCJhIjoiY2xzYzl0ZmdqMGV2MDJrc2J0d2QxY3BjMSJ9.j4YNLdElfmSsY_rztE1FJw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kchgo/clsupzcy5003k01p4749laxdc',
    center: [-79.35, 43.7],
    zoom: 10,
});

map.on('load', () => {

    //Adding a data source containing GeoJSON data and visualizing it as a layer.
    map.addSource('sport-data', {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'name': 'SportChek - Toronto'
                    },
                    'geometry': {
                        'coordinates': [
                            -79.38037044907225,
                            43.6428149999997
                        ],
                        'type': 'Point'
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'sport-point',
        'type': 'circle',
        'source': 'sport-data',
        'paint': {
            'circle-radius':12,
            'circle-color': '#ac86a8',
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1
        }
    });

    //Adding a data source for the Toronto parks GeoJSON file.
    map.addSource('parks-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kchartigango/ggr472-lab2/main/parks-updated.geojson'
    });

    map.addLayer({
        'id': 'parks-point',
        'type': 'circle',
        'source': 'parks-data',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#00a86b',
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1 
        }
    });

});