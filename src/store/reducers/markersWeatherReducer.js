import {SET_MARKER_WEATHER} from '../actions/actionTypes';

const initialState = {} // [markerId]: {data: {}, city: ""}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MARKER_WEATHER:
            return {
                ...state, [action.markerId]: {data: action.data, city: action.city}
            }
        default:
            return state
    }
}
