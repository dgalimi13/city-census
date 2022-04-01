export const addRelocation = (relocation, cityId) => {

    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/cities/${cityId}/relocations`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(relocation)
        })
        .then(response => response.json())
        .then(account => {
                if (account.error) {                        
                    alert(account.error)
                }   else {
                    dispatch({type: 'ADD_RELOCATION', payload: account})
                }
            }
        )
    }
}