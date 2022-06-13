const GET_POSTS = '/posts';
const getPosts = posts => ({
    type: GET_POSTS,
    payload: posts
});

export const posts = () => async dispatch => {
    const res = await fetch('/api/posts', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(getPosts(data));
    }
}

const initialState = { };
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_POSTS:
            newState = { ...state, ...action.payload.posts };
            return newState;
        default:
            return state;
    }
}
