import { createStore } from 'redux';

const reducer = (state, action) => {
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
        default:
            return state;
    }
};

export const getValue = state => state.value;

const initialState = {
    value: 200,
    list: [1, 2, 3],
    x: 'test',
};
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    reducer,
    initialState,
    devTool
);

export default store;