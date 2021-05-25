/**
 * Creates pop-up with local weather information at intersections caused by user-drawn rectangle
*/
//var popup = L.popup();

//popup function

function popUpWeather(coordinates) {
    console.log(coordinates)
    for(i = 0; i < coordinates.length; i++) {
        var popup = L.popup()
        .setLatLng([
            coordinates[i][1], 
            coordinates[i][0]
        ])
        .setContent("Wetter")
        .openOn(map);
    }
}

