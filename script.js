//DOM Selectors
var form = document.querySelector('#form');
var searchCity = document.querySelector('#search');
var today = document.querySelector('#today');
var otherDays = document.querySelector('#otherDays');
var searchHistory = document.querySelector('#searchHistory');

//Variables
var history = [];
var weatherAPI = 'https://api.openweathermap.org';
var weatherAPIKey = 'fe29539b00ab8a3315c5e2a92b0b93f4';


//Plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone)


//Functions
function getCoordinates(search){
    var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!data[0]) {
        alert('Try again.');
      } else {
        appendToHistory(search);
        fetchWeather(data[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

function searchSubmit(e) {
    if (!searchInput.value) {
        return;
    }

    e.preventDefault();
    var search = searchCity.value.trim();
    getCoordinates (search);
    searchCity.value = '';
}

function historyClick(e) {
    var btn = e.target;
    var search = btn.getAttribute('search-data');
    getCoordinates(search);
}

function getWeather(city) {
    
}