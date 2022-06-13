const GET_ITEMS = '/items';
const getItems = items => ({
    type: GET_ITEMS,
    payload: items
});

export const items = () => async dispatch => {
    const res = await fetch('/api/items/', {
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(getItems(data));
    }
}

const initialState = { };
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_ITEMS:
            newState = { ...state, ...action.payload.items }
            return newState;
        default:
            return state;
    }
}
