import {SET_LOADING, SET_MARKER_WEATHER} from './actionTypes';
import {fetchCurrentWeather, fetchLocationByCoords} from '../api/api';

export const getWeatherAtMarkerAction = (lat, lon, markerId) => {
    return async (dispatch) => {
        dispatch({type: SET_LOADING, isLoading: true});
        const weatherRes = await fetchCurrentWeather(lat, lon);
        if (weatherRes?.data) {
            const {data} = weatherRes;
            dispatch({
                type: SET_MARKER_WEATHER,
                markerId,
                data,
                city: `${data.name} ${data.sys.country}`,
            });
        }
        dispatch({type: SET_LOADING, isLoading: false});
    };

};
