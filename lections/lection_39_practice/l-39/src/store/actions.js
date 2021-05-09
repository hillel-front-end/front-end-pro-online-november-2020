import { loadWeather5DaysByCityName } from '../services/weatherService';
import { SET_FILTER_VALUE } from './types';

export const resetValue = (value) => {
    return {
        type: 'reset_value',
        value,
    };
}

export const loadData = (data) => {
    // Action
    return {
        type: 'load_data',
        list: data.list
    }
}

function callData() {
   return dispatch => {
       return  fetch()
           .then(resp => resp.json())
           .then(data => dispatch(loadData(data)))
   }
}

export function loadForecastByCity(city) {
    return (dispatch, state) => {
        if (!state.weather.forecast) {
            loadWeather5DaysByCityName(city)
                .then(forecast => {
                    dispatch({
                        type: 'set_forecast_weather',
                        forecast,
                    })
                });
        }

        return {
            type: 'set_forecast_weather_pending'
        };
    }
}

export function setFilterValue(value) {
    return {
        type: SET_FILTER_VALUE,
        payload: isNaN(value) ? null : value
    }
}

export function setFilterCondition(value) {
    return {
        type: 'set_filter_condition',
        payload: value
    }
}

export function setSortDirection(direction) {
    return {
        type: 'set_sort_direction',
        payload: direction
    }
}

export function setSortField(sortField) {
    return {
        type: 'set_sort_field',
        payload: sortField
    }
}

// DRY - Don't repeat yourself





