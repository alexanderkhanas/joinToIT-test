import {fetchCoordsByQuery, fetchWeekForecast} from '../api/api';
import {SET_FORECAST, SET_LOADING} from './actionTypes';

export const getForecastByQueryAction = (query) => {
    return async dispatch => {
        dispatch({type: SET_LOADING, isLoading: true})
        const locationRes = await fetchCoordsByQuery(query);
        if (locationRes?.data[0]) {
            const {lat, lon} = locationRes?.data[0]
            const forecastRes = await fetchWeekForecast(lat, lon);
            if (forecastRes?.data?.daily) {
                const {daily} = forecastRes.data
                dispatch({type: SET_FORECAST, days: daily, city: query})
            }
        }
        dispatch({type: SET_LOADING, isLoading: false})
    }
}

export const clearForecastAction = () => {
    return {
        type: SET_FORECAST, days: [], city: ""
    }
}
