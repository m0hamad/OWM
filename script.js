let owmApiKey = '13ee5730a6001c77f9a835e39d472d5c';

function getWeatherForecast(citySearched) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citySearched}&APPID=13ee5730a6001c77f9a835e39d472d5c&units=metric`).then( response => {

        return response.json();

    }).then( result => {
        init(result)
    })
}

function init(serverResponse) {
    console.log(serverResponse);

    let temp = document.getElementById('temperature')
    let humidity = document.getElementById('humidity')

    documentIconImg.src = 'http://openweathermap.org/img/wn/' + serverResponse.weather[0].icon + '.png';

    document.getElementById('documentIconImg').style.height = '60px'
    document.getElementById('documentIconImg').style.width = '60px'

    temp.innerHTML = Math.floor(serverResponse.main.temp) + '&#8451';

    humidity.innerHTML = 'Humidity: ' + serverResponse.main.humidity + '%'
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let citySearched = document.getElementById('searchInput').value;
    if (citySearched)
        getWeatherForecast(citySearched);
})