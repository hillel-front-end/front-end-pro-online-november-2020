// functional component
import { useSelector } from 'react-redux';

export default function TotalWeatherData() {
    const currentWeather = useSelector(state => state.weather.current);

    return (
        <div className="city-details">
            <h2>Total weather</h2>
            <pre>
                {JSON.stringify(currentWeather, null, '\t')}
            </pre>
        </div>
    );
}