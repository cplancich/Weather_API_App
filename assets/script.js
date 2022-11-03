var apiKey = "4ab228336c684eae6edfe8b34c655dec";

// Submit the form to fetch weather information

    // Fetch the city name from the text <input>

    // Call fetchGeolocation() and pass the city name

// Handle button clicks to fetch weather information

    // Get the city name from the clicked button's (event.target) data-city attribute

    // Call fetchGeolocation(cityName)

// Fetch Geolocation Data (Geocoding API)
function fetchGeolocation(cityName) {

    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=4ab228336c684eae6edfe8b34c655dec`;

    fetch(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

}

fetchGeolocation("Bellingham");
fetchGeolocation("Seattle");

// Fetch Weather Data (Onecall)
function fetchOneCallWeather() {
    
    var lat;
    var lon;

    var request = `https://api.openweathermap.org/data/2.5/onecall?appid=4ab228336c684eae6edfe8b34c655dec&lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely`

    fetch(request)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        });

}

fetchOneCallWeather();