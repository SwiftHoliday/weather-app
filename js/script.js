// Constants and Variables
let weatherData, userInput;

const API_KEY = CONFIG.openWeatherAPIKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $form = $('form');
const $input = $('input[type="text"]');
// Cached Element References


// Event Listeners 
$form.on('submit', handleGetData)

// Functions

// q={city name}&appid={API key}

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();

    if(!userInput) return;

    
    $.ajax(BASE_URL + `q=${userInput}&units=imperial&appid=` + API_KEY)
    .then(function(data) {
        console.log(data);
        weatherData = data;
        render()
    }, function(error) {
        console.log('Error: ', error)
    });
}

function render() {
    let weatherTemp = Math.round(weatherData.main.temp);
    let weatherIndex = Math.round(weatherData.main.feels_like);
    $title.text('Weather For: ' + weatherData.name);
    $temp.text('Temperature: ' + weatherTemp + '°F');
    $index.text('Feels Like: ' + weatherIndex + '°F');
    $desc.text('Weather: ' + weatherData.weather[0].description);
    
    const weatherDetailUI = weatherData.map(function(weather) {
});
}