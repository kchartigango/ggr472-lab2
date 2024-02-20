mapboxgl.accessToken = 'pk.eyJ1Ijoia2NoZ28iLCJhIjoiY2xzYzl0ZmdqMGV2MDJrc2J0d2QxY3BjMSJ9.j4YNLdElfmSsY_rztE1FJw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kchgo/clsupzcy5003k01p4749laxdc',
    center: [-79.2, 43.8],
    zoom: 9,
});

map.on('load', () => {

    //Adding a data source for the GeoJSON file.
    map.addSource('restaurants-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kchartigango/ggr472-lab2/main/restaurants.geojson'
    });

    map.addLayer({
        'id': 'restaurants-point',
        'type': 'circle',
        'source': 'restaurants-data',
        'paint': {
            'circle-radius': 7,
            'circle-color': '#b175e8'
        }
    });
});