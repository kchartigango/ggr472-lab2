mapboxgl.accessToken = 'pk.eyJ1Ijoia2NoZ28iLCJhIjoiY2xzYzl0ZmdqMGV2MDJrc2J0d2QxY3BjMSJ9.j4YNLdElfmSsY_rztE1FJw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kchgo/clsupzcy5003k01p4749laxdc',
    center: [-79.2, 43.8],
    zoom: 9,
});

map.on('load', () => {

    //Adding a data source for the Toronto parks GeoJSON file.
    map.addSource('parks-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kchartigango/ggr472-lab2/main/parks.geojson'
    });

    map.addLayer({
        'id': 'parks-point',
        'type': 'circle',
        'source': 'parks-data',
        'paint': {
            'circle-radius': 12,
            'circle-color': '#00a86b',
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1 
        }
    });

    //Adding a data source from a Mapbox tileset
    map.addSource('restaurants-point', {
        'type': 'geojson',
        'url': 'mapbox://kchgo.ar3w32dg'
    });

    map.addLayer({
        'id': 'restaurants-point',
        'type': 'circle',
        'source': 'restaurants-point',
        'source-layer': 'restaurants-8crsso'
    });

});