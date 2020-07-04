import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import errorReducer from '../reducers/errorReducer';
import productReducer from '../reducers/productReducer';

const initialState = {
}

const reducers = combineReducers({
    root: rootReducer,
    err: errorReducer,
    product: productReducer
})

export default createStore(reducers, initialState, applyMiddleware(logger));

