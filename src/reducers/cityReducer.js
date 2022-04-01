
export default function cityReducer(state = {cities: []}, action) {
    switch (action.type) {
        case 'FETCH_CITIES':
            return {cities: action.payload}
        case 'ADD_CITY':
            return {...state, cities: [...state.cities, action.payload]}
        case 'ADD_RELOCATION':
            let cities = state.cities.map(city => {
                if (city.id === action.payload.id) {
                    return action.payload
                }   else {
                    return city
                }
            })
            return {...state, cities: cities}  
        case 'DELETE_RELOCATION':
            let cities2 = state.cities.map(city => {
                if (city.id === action.payload.id) {
                    return action.payload
                }   else {
                    return city
                }
            })
            return {...state, cities: cities2}
        default:
            return state
    }
}
