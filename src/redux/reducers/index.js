import { combineReducers } from 'redux';
import { productRendecer } from './productReducer';

const reducers = combineReducers({
    allProducts : productRendecer
})