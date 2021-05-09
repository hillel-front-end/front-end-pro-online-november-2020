export const DIRECTION = {
    DEC: -1,
    ASC: 1
}
export function sort(array, field, direction = DIRECTION.ASC) {
    return array.sort((item1, item2) => {
        return (deepValue(item1,field) < deepValue(item2, field) ? -1 : 1) * direction;
    });
}

export function deepValue(data, pathToValue) {
    if (!pathToValue) return;

    let value = null;

    pathToValue.split('.').forEach(key => {
        value = value ? value[key] : data[key];
    });

    return value;
}

export const isNull = (value) => {
    return typeof value === 'object' && !value;
}
