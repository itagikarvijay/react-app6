const initialState = {
    error: {}
};

const errorReducer = (state = initialState, action) => {
    console.log('errorReducers');
    console.log(action)
    switch (action.type) {
        case "SET_ERROR":
            state = {
                ...state,
                error: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
};

export default errorReducer;