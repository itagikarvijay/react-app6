const initialState = {
    title: 'initial title',
    user: {}
};

const rootReducer = (state = initialState, action) => {
    console.log('rootReducers');
    console.log(action)
    switch (action.type) {
        case "SET_TITLE":
            state = {
                ...state,
                title: action.payload
            }
            break;
        case "SET_USER":
            state = {
                ...state,
                user: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
};

export default rootReducer;