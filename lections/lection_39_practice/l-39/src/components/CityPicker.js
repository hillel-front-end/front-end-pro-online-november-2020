  
import { useEffect, useRef, useState } from 'react';
import {loadWeatherByCityName} from '../services/weatherService';
import {
    Link
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// functional component
export default function CityPicker(props) {
    const currentWeather = useSelector(state => state.weather.current);
    const [value, setValue] = useState(props.myCities[0]);
    const dispatch = useDispatch();
    const cityPicker = useRef();

    const loadWeather = (cityName) => {
        loadWeatherByCityName(cityName)
            .then((weather) => {
                document.title = `Our weather in ${weather.name}!`;
                dispatch({
                    type: 'set_current_weather',
                    weatherFromAPI: weather
                });
            });
    }

    useEffect(() => {
        if (!currentWeather) {
            loadWeather(props.myCities[0]);
        }
    });


    const onChange = event => {
        loadWeather(event.target.value);
        setValue(event.target.value);
        cityPicker.current.classList.add('TEST');
    };

    return (
        <div className="city-picker">
            <h2>City picker</h2>
            <div>
                Pick city: 
                <select onChange={onChange} defaultValue={value} ref={cityPicker}>
                    <option disabled value={''}/>
                    {props.myCities.map((item, index) => <option key={`id-${index}`} value={item}>{item}</option>)}
                </select>
            </div>
            {currentWeather && currentWeather.main && (
                <div>
                    <h3>Short info</h3>
                    Temp: {currentWeather.main.temp}, Feels like: {currentWeather.main.feels_like}
                    <br />
                    <h3>Details</h3>
                    <Link to={`/city-details/${value}`}>Go to details</Link>
                    <h3>Forecast for 5 days</h3>
                    <Link to={`/city-details-5-days/${value}`}>Go to forecast 5 days</Link>
                </div>
            )}
            {props.test && <div>Test text: {props.test}</div>}
        </div>
    );
}