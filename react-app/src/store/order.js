const ADD_ORDER = '/orders/add';
const addOrder = item => ({
    type: ADD_ORDER,
    payload: item
});
export const add = item => async dispatch => {
    dispatch(addOrder(item));
}

const UPDATE_ORDER = '/orders/update';
const updateOrder = item => ({
    type: UPDATE_ORDER,
    payload: item
})

export const update = item => async dispatch => {
    dispatch(updateOrder(item));
}

const REM_ORDER = '/orders/remove';
const remOrder = item => ({
    type: REM_ORDER,
    payload: item
});
export const remove = item => async dispatch => {
    dispatch(remOrder(item));
}

const DEL_ORDER = '/orders/delete';
const delOrder = () => ({
    type: DEL_ORDER
});
export const del = () => async dispatch => {
    dispatch(delOrder());
}

const initialState = {};
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case ADD_ORDER:
            newState = { ...state, [action.payload.name]: action.payload };
            return newState;
        case UPDATE_ORDER:
            newState = { ...state, [action.payload.name]: action.payload };
            return newState
        case REM_ORDER:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        case DEL_ORDER:
            return {};
        default:
            return state;
    }
}
