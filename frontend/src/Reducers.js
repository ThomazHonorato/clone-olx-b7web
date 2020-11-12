import { useReducer } from 'react';
import {combineReducers} from 'redux';
import userReducer from './Reducers/userReducer'

export default combineReducers({
    user: userReducer
});