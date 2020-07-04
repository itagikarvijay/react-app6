import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import errorReducer from '../reducers/errorReducer';

const initialState = {
    // title: 'default title',
    // user: {},
    // error: {}
}

const reducers = combineReducers({
    root: rootReducer,
    err: errorReducer
})

export default createStore(reducers, initialState, applyMiddleware(logger));

