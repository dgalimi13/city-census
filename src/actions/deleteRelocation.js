export const deleteRelocation = (relocationId, cityId) => {

    return (dispatch) => {
        return fetch(`http://127.0.0.1:3000/api/v1/cities/${cityId}/relocations/${relocationId}`, {
            method: 'DELETE'
        })
        .then (response => response.json())
        .then(city => dispatch({type: 'DELETE_RELOCATION', payload: city}))
    }
}