//12.922894, 77.557976 
let latitude = 12.922894, longitude = 77.557976

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude, latitude],
    zoom : 16,
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {enableHighAccuracy : true},
        trackUserLocation : true,
    })
)

map.addControl(
    new MapboxDirections({
        accessToken : mapboxgl.accessToken
    }),
    "top-left"
)