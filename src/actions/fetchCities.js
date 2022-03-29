

export function fetchCities() {
    console.log('inside fetch cities')
    fetch('http://127.0.0.1:3000/api/v1/cities')
    .then(resp => resp.json())
    .then(data => console.log(data))

    // dispatch()
}
