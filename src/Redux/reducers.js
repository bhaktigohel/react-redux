import { combineReducers } from 'redux';
import { dashboardReducer, headerReducer } from '../components';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({ dashboardReducer, headerReducer, formReducer });