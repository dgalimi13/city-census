
export default function cityReducer(state = {cities: []}, action) {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {cities: action.payload}
        default:
            return state
    }
}
