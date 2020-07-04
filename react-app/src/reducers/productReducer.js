const initialState = {
    products_list: {}
}

const productReducer = (state = initialState, action) => {
    console.log('productReducer');
    switch (action.type) {
        case "SET_PRODUCTS_LIST":
            state = {
                ...state,
                products_list: action.payload.data
            }
            break;
        default:
            return state;
    }
    return state;
}

export default productReducer