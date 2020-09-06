import {combineReducers} from 'redux';
import forecastReducer from './forecastReducer';
import baseReducer from './baseReducer';
import markersWeatherReducer from './markersWeatherReducer';

export default combineReducers({
    forecast: forecastReducer,
    base: baseReducer,
    markersWeather: markersWeatherReducer
})
