import { createStore } from 'redux';
import { deepValue, sort } from '../services/utils';

const reducer = (state, action) => {
    // state - current store values
    // action - data from dispatching
    switch (action.type) {
        case 'log_value':
            console.log('Log value: ', state.value);
            return state;
        case 'update_value':
            return {
                ...state,
                value: action.value
            };
        case 'reset_value':
            return {
                ...state,
                list: [],
                value: 0
            };
        case 'load_data':
            return {
                ...state,
                list: action.list
            };
        case 'set_current_weather':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    current: action.weatherFromAPI
                }
            };
        case 'set_forecast_weather':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    forecast: action.forecast,
                    originalForecast: action.forecast
                }
            };
        case 'perform_filter':
            const forecast = {...state.weather.originalForecast}; // new link

            forecast.list = forecast.list.filter(record => {
                return deepValue(record, action.filterKey) >= action.limit
            });

            forecast.list = sort(forecast.list, action.filterKey, action.order);

            return {
                ...state,
                weather: {
                    ...state.weather,
                    forecast,
                }
            };
        default:
            return state;
    }
};

export const getValue = state => state.value;

const initialState = {
    value: 200,
    list: [1, 2, 3],
    x: 'test',
    weather: {
        current: null,
        forecast: null,
        originalForecast: null,
    },
};

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    reducer,
    initialState,
    devTool
);

export default store;