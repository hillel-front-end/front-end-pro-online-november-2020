export const DIRECTION = {
    DEC: -1,
    ASC: 1
}
export function sort(array, field, direction = DIRECTION.ASC) {
    console.error(direction, field);
    return array.sort((item1, item2) => {
        return (item1[field] < item2[field] ? -1 : 1) * direction;
    });
}
