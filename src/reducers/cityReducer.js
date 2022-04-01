
export default function cityReducer(state = {cities: []}, action) {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {cities: action.payload}
        case 'ADD_CITY':
            return {...state, cities: [...state.cities, action.payload]}
        case 'ADD_CITY':
            return {}
                    
        default:
            return state
    }
}
