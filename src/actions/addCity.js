export const addCity = (data) => {

    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/cities', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(city => dispatch({type: 'ADD_CITY', payload: city}))
    }
}