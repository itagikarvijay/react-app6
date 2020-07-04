const SET_ERROR = 'SET_ERROR'

export function setError(error) {
    console.log('set Error')
    return {
        type: SET_ERROR,
        payload: error
    };
}