import React, { useEffect } from 'react';
import { loadWeather5DaysByCityName } from '../services/weatherService';
import { useParams } from 'react-router';
import Table, { Td, Tr } from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCondition, setFilterValue, setSortDirection, setSortField } from '../store/actions';
import { getFilteredForecast, getForecast, getSortField } from '../store/selectors';

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
    const selectedForFilter = useSelector(getSortField)
    const forecast = useSelector(getForecast);
    const list = useSelector(getFilteredForecast);
    const dispatch = useDispatch();

    const onClickSort = (sortField) => {
        dispatch(setSortField(sortField));
    };

    useEffect(() => {
        if (!forecast) {
            loadWeather5DaysByCityName(routeParams.city)
                .then(forecast => {
                    dispatch({
                        type: 'set_forecast_weather',
                        forecast,
                    })
                });
        }

        // dispatch(loadForecastByCity(routeParams.city));
    }, [routeParams.city, dispatch, forecast]);

    const getSelectedStatus = (index) => {
        return columns[index].sortField === selectedForFilter ? 'selected' : '';
    }

    const onFilterValueChange = (event) => {
        dispatch(setFilterValue(event.currentTarget.valueAsNumber));
    }

    const onSortChange = (event) => {
        dispatch(setSortDirection(Number(event.currentTarget.value)));
    }

    const onFilterConditionChange = (event) => {
        dispatch(setFilterCondition(event.currentTarget.value));
    }

    return forecast && (
        <div style={{ display: 'flex' }}>
            <div>
                <Table
                    columns={columns}
                    onClickSort={onClickSort}
                >
                    {list.map(({ main, dt_txt }, index) => {
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
                <select onChange={onSortChange}>
                    <option value={null}/>
                    <option value="-1">DEC</option>
                    <option value="1">ASC</option>
                </select>
                <select onChange={onFilterConditionChange}>
                    <option value={null}/>
                    <option value=">=">{'>='}</option>
                    <option value="<=">{'<='}</option>
                </select>
                <input type="number" onChange={onFilterValueChange}/>
            </div>
        </div>
    );
};

export default ForecastFiveDays;
