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