import React, { useEffect, useRef, useState } from 'react';
import { loadWeather5DaysByCityName } from '../services/weatherService';
import { useParams } from 'react-router';
import Table, { Td, Tr } from './Table';
import { useDispatch, useSelector } from 'react-redux';

const columns = [{
    title: 'Date',
    sortField: 'dt'
}, {
    title: 'Feels like',
    sortField: 'main.feels_like'
}, {
    title: 'Temperature',
    sortField: 'main.temp'
}, {
    title: 'Temperature max',
    sortField: 'main.temp_max'
}, {
    title: 'Temperature min',
    sortField: 'main.temp_min'
}];

const ForecastFiveDays = () => {
    const routeParams = useParams();
    const [selectedForFilter, setForFilter] = useState('');
    const forecast = useSelector(state => state.weather.forecast);
    const dispatch = useDispatch();
    const limitRef = useRef();
    const orderRef = useRef();
    const forecastWeather = useSelector(state => state.weather.forecast)

    const onClickSort = (sortField) => {
        // if (sortField === newSortField) {
        //     setSortDirectionField(sortDirection === DIRECTION.ASC ? DIRECTION.DEC : DIRECTION.ASC)
        // }
        //
        // setSortField(newSortField);
        setForFilter(sortField);
    };

    useEffect(() => {
        if (!forecastWeather) {
            loadWeather5DaysByCityName(routeParams.city)
                .then(forecast => {
                    dispatch({
                        type: 'set_forecast_weather',
                        forecast,
                    })
                });
        }
    }, [routeParams.city, dispatch, forecastWeather]);

    useEffect(() => {
        // if (sortField) {
        //     setWeather((currentForecast) => {
        //         return {
        //             ...currentForecast,
        //             list: sort(currentForecast.list, sortField, sortDirection)
        //         };
        //     })
        // }
    }, []);

    const getSelectedStatus = (index) => {
        return columns[index].sortField === selectedForFilter ? 'selected' : '';
    }

    const performFilter = () => {
        const limit = limitRef.current.valueAsNumber;
        const order = Number(orderRef.current.value);

        // Action - filter more than limit
        dispatch({
            type: 'perform_filter',
            limit,
            filterKey: selectedForFilter,
            order,
        });
    }

    return forecast && (
        <div style={{ display: 'flex' }}>
            <div>
                <Table
                    columns={columns}
                    onClickSort={onClickSort}
                >
                    {forecast.list.map(({ main, dt_txt }, index) => {
                        return <Tr key={dt_txt}>
                            <Td className={ getSelectedStatus(0) }>{dt_txt}</Td>
                            <Td className={ getSelectedStatus(1) }>{main.feels_like}</Td>
                            <Td className={ getSelectedStatus(2) }>{main.temp}</Td>
                            <Td className={ getSelectedStatus(3) }>{main.temp_max}</Td>
                            <Td className={ getSelectedStatus(4) }>{main.temp_min}</Td>
                        </Tr>
                    })}
                </Table>
            </div>

            <div>
                <select ref={orderRef}>
                    <option disabled value={''}/>
                    <option value="-1">DEC</option>
                    )
                    <option value="1">ASC</option>)
                </select>
                <input type="number" ref={limitRef} />
                <button onClick={performFilter}>Filter</button>
            </div>
        </div>
    );
};

export default ForecastFiveDays;
