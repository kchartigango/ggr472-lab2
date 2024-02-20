mapboxgl.accessToken = 'pk.eyJ1Ijoia2NoZ28iLCJhIjoiY2xzYzl0ZmdqMGV2MDJrc2J0d2QxY3BjMSJ9.j4YNLdElfmSsY_rztE1FJw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-79.2, 43.8],
    zoom: 9,
});

map.on('load', () => {

    //Adding a data source for the GeoJSON file.
    map.addSource('restaurants-data', {
        type: 'geojson',
        data: ''
    })
})