import { useEffect } from "react";
import { useParams } from "react-router";
import {loadWeatherByCityName} from '../services/weatherService';
import { useDispatch, useSelector } from 'react-redux';

// functional component
export default function CityDetails() {
    const routeParams = useParams();
    const currentWeather = useSelector(state => state.weather.current);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // componentDidMount
        if (!currentWeather) {
            loadWeatherByCityName(routeParams.city)
                .then(weather => {
                    dispatch({
                        type: 'set_current_weather',
                        weatherFromAPI: weather
                    });
                });
        }
    }, [routeParams, dispatch, currentWeather]);


    const getOnClickHandler = id => () => console.log(id);
    
    return (
        <div className="city-details">
            <h2>City Details</h2>
            Current city - {routeParams.city}
            <br />
            {currentWeather && (
                <table border="2">
                    <tbody>
                        {Object.entries(currentWeather).map(([key, value], index) => (
                            <tr data-key={`id-${index}`} key={`id-${index}`} onClick={getOnClickHandler(value)}>
                                <td>{key}</td>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}