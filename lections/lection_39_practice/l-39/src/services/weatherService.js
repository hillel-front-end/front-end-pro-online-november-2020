const API_KEY = 'fe147517cb42a8032190ecae01b8741c';

export const loadWeatherByCityName = cityName => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${cityName}`)
        .then(resp => resp.json());
}

export const loadWeather5DaysByCityName = cityName => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&q=${cityName}`)
        .then(resp => resp.json());
}