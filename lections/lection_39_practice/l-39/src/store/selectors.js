import { deepValue, isNull, sort } from '../services/utils';

export function getForecast(state) {
    return state.weather.forecast;
}

export function getFilerValue(state) {
    return state.weather.filerValue;
}

export function getSortDirection(state) {
    return state.weather.sortDirection;
}

export function getSortField(state) {
    return state.weather.sortField;
}

export function getFilterCondition(state) {
    return state.weather.filterCondition;
}

export function getFilteredForecast(state) {
    const filerValue = getFilerValue(state);
    const sortDirection = getSortDirection(state);
    const sortField = getSortField(state);
    const forecast = getForecast(state);
    const condition = getFilterCondition(state);

    let list = forecast && forecast.list;

    if (!list) {
        return [];
    }

    if (filerValue !== undefined && !isNull(filerValue) && !isNull(condition)) {
        list = list.filter(record => {
            if (condition === '>=') {
                return deepValue(record, sortField) >= filerValue;
            } else {
                if (condition === '<=') {
                    return deepValue(record, sortField) <= filerValue;
                }
            }

            return record;
        });
    }

    if (sortField && sortDirection) {
        list = sort(list, sortField, sortDirection);
    }

    return list
}
