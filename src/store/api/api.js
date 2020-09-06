import {locationRequest, weatherRequest} from './_axios';

const basicString = 'appid=bd9da09495ed1461479de94e5931f65a&units=metric';

export const fetchWeekForecast = (lat, lon) => {
    return weatherRequest.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly&${basicString}`).catch((e) => e.response);
};

export const fetchCurrentWeather = (lat, lon) => {
    return weatherRequest.get(`/weather?lat=${lat}&lon=${lon}&${basicString}`)
}

export const fetchLocationByCoords = (lat, lon) => {
    return locationRequest.get(`/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
};

export const fetchCoordsByQuery = (query) => {
    return locationRequest.get(`search/${query}?addressdetails=1&format=json`);
};
