import { combineReducers } from 'redux';
import getWeather from './getWeather';

const rootReducer = combineReducers({
    weather: getWeather,
});

export default rootReducer;