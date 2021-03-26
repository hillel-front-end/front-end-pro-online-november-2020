const API_KEY = '***'; // Not commit to repo

export const loadWeatherByCityName = cityName => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=${cityName}`)
        .then(resp => resp.json());
}