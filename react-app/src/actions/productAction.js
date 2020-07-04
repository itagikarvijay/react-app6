const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST';

export const setProductList = (productsList) => {
    console.log("productsList")
    console.log(productsList)
    return {
        type: SET_PRODUCTS_LIST,
        payload: productsList
    }
}
