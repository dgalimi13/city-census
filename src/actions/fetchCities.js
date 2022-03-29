import Cities from "../components/Cities"


export function fetchCities() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/cities')
        .then(resp => resp.json())
        .then(cities => dispatch({
            type: 'FETCH_CITIES',
            payload: cities
        }))
    }
}
