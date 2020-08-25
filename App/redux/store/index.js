import thunk from 'redux-thunk';
import {combine} from '../reducer/combineReducer';
import {createStore, applyMiddleware} from 'redux';
export const store = createStore(combine, applyMiddleware(thunk));
