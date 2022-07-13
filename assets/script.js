var apiKey = "4ab228336c684eae6edfe8b34c655dec";

// Submit the form to fetch weather information

// Handle button clicks to fetch weather information

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

// Fetch Weather Data (Onecall)
