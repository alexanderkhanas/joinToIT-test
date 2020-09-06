import {SET_FORECAST} from '../actions/actionTypes';

const initialState = {
    days: [],
    city: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state, days: action.days, city: action.city
            }
        default:
            return state
    }
}
