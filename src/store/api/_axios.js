import axios from 'axios';


export const weatherRequest = axios.create({baseURL: "https://api.openweathermap.org/data/2.5"})
export const locationRequest = axios.create({baseURL: "https://nominatim.openstreetmap.org", headers: {
    "Accept-Language": "en"
    }})

