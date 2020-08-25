import {combineReducers} from 'redux';
import {reducer} from '../reducer/index';
import {counterReducer} from '../reducer/counter';
export const combine = combineReducers({
  redu1: reducer,
  redu2: counterReducer,
});
