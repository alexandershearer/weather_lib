async function getWeather(apiKey, units, method = 'zip', zip = 0, lat = '', lon = '', city = '') {

    let path = ''

    switch (method) {
        case 'city':
            path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        case 'geo':
            path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        default:
            path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`

    }



    const responce = await fetch(path)
    const json = await responce.json()

    const { main, weather } = json
    const { temp } = main
    const { description } = weather[0]

    return { temp, description }

}


export default getWeather