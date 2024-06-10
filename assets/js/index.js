// WEATHER DASHBOARD

// Globally declard variables
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const current = document.querySelector(".current")
const future = document.querySelector(".future")
const forecast = document.querySelector(".forecast")
const forecastCard1 = document.querySelector(".forecast-card-1")
const forecastCard2 = document.querySelector(".forecast-card-2")
const forecastCard3 = document.querySelector(".forecast-card-3")
const forecastCard4 = document.querySelector(".forecast-card-4")
const forecastCard5 = document.querySelector(".forecast-card-5")
const apiKey = "d1f494054696aa2d95d7b146eb42db19"

let cityData = []

// Form submit event listener and API fetch request with error for invalid form submission
weatherForm.addEventListener("click", function(event) {
    event.preventDefault()

    const city = cityInput.value

    if(city) {
        // Geo Coding API
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
            .then(function(response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                localStorage.setItem("City-Data", JSON.stringify(data))

                const cityLat = data[0].lat
                const cityLon = data[0].lon

                // Current Conditions API
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}&units=imperial`)
                    .then(function(response) {
                        return response.json()
                    })
                    .then(function(data) {
                        console.log(data)
                        localStorage.setItem("Weather", JSON.stringify(data))
                        
                        const name = document.createElement("h2")
                        const temp = document.createElement("p")
                        const humidity = document.createElement("p")
                        const windSpeed = document.createElement("p")

                        current.style.display = "flex"

                        card.textContent = ""
                        
                        name.textContent = data.name
                        temp.textContent = `${data.main.temp}°`
                        humidity.textContent = `Humidity: ${data.main.humidity}%`
                        windSpeed.textContent = `Wind Speed: ${data.wind.speed} mph`

                        name.classList.add("h2")
                        temp.classList.add("temp")
                        humidity.classList.add("p")
                        windSpeed.classList.add("p")
                        
                        card.appendChild(name)
                        card.appendChild(temp)
                        card.appendChild(humidity)
                        card.appendChild(windSpeed)

                        // 5-Day Forecast API
                        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&cnt=5&appid=${apiKey}&units=imperial`)
                            .then(function(response) {
                                return response.json()
                            })
                            .then(function(data) {
                                console.log(data)
                                localStorage.setItem("Forecast", JSON.stringify(data))

                                // City Name Variables
                                const name1 = document.createElement("h2")
                                const name2 = document.createElement("h2")
                                const name3 = document.createElement("h2")
                                const name4 = document.createElement("h2")
                                const name5 = document.createElement("h2")

                                // Temp variables
                                const temp1 = document.createElement("p")
                                const temp2 = document.createElement("p")
                                const temp3 = document.createElement("p")
                                const temp4 = document.createElement("p")
                                const temp5 = document.createElement("p")

                                // Humidity variables
                                const humidity1 = document.createElement("p")
                                const humidity2 = document.createElement("p")
                                const humidity3 = document.createElement("p")
                                const humidity4 = document.createElement("p")
                                const humidity5 = document.createElement("p")

                                // Wind Speed variables
                                const windSpeed1 = document.createElement("p")
                                const windSpeed2 = document.createElement("p")
                                const windSpeed3 = document.createElement("p")
                                const windSpeed4 = document.createElement("p")
                                const windSpeed5 = document.createElement("p")

                                forecast.style.display = "flex"
                                future.style.display = "flex"
                                
                                // Forecast Card 1
                                forecastCard1.textContent = ""

                                name1.textContent = data.city.name
                                name1.classList.add("h2")
                                forecastCard1.appendChild(name1)

                                temp1.textContent = `${data.list[0].main.temp}°`
                                temp1.classList.add("temp")
                                forecastCard1.appendChild(temp1)

                                humidity1.textContent = `Humidity: ${data.list[0].main.humidity}%`
                                humidity1.classList.add("p")
                                forecastCard1.appendChild(humidity1)

                                windSpeed1.textContent = `Wind Speed: ${data.list[0].wind.speed} mph`
                                windSpeed1.classList.add("p")
                                forecastCard1.appendChild(windSpeed1)

                                // Forecast Card 2
                                forecastCard2.textContent = ""

                                name2.textContent = data.city.name
                                name2.classList.add("h2")
                                forecastCard2.appendChild(name2)

                                temp2.textContent = `${data.list[1].main.temp}°`
                                temp2.classList.add("temp")
                                forecastCard2.appendChild(temp2)

                                humidity2.textContent = `Humidity: ${data.list[1].main.humidity}%`
                                humidity2.classList.add("p")
                                forecastCard2.appendChild(humidity2)

                                windSpeed2.textContent = `Wind Speed: ${data.list[1].wind.speed} mph`
                                windSpeed2.classList.add("p")
                                forecastCard2.appendChild(windSpeed2)
                                
                                // Forecast Card 3
                                forecastCard3.textContent = ""

                                name3.textContent = data.city.name
                                name3.classList.add("h2")
                                forecastCard3.appendChild(name3)

                                temp3.textContent = `${data.list[2].main.temp}°`
                                temp3.classList.add("temp")
                                forecastCard3.appendChild(temp3)

                                humidity3.textContent = `Humidity: ${data.list[2].main.humidity}%`
                                humidity3.classList.add("p")
                                forecastCard3.appendChild(humidity3)

                                windSpeed3.textContent = `Wind Speed: ${data.list[2].wind.speed} mph`
                                windSpeed3.classList.add("p")
                                forecastCard3.appendChild(windSpeed3)

                                // Forecast Card 4
                                forecastCard4.textContent = ""

                                name4.textContent = data.city.name
                                name4.classList.add("h2")
                                forecastCard4.appendChild(name4)

                                temp4.textContent = `${data.list[3].main.temp}°`
                                temp4.classList.add("temp")
                                forecastCard4.appendChild(temp4)

                                humidity4.textContent = `Humidity: ${data.list[3].main.humidity}%`
                                humidity4.classList.add("p")
                                forecastCard4.appendChild(humidity4)

                                windSpeed4.textContent = `Wind Speed: ${data.list[3].wind.speed} mph`
                                windSpeed4.classList.add("p")
                                forecastCard4.appendChild(windSpeed4)

                                // Forecast Card 5
                                forecastCard5.textContent = ""

                                name5.textContent = data.city.name
                                name5.classList.add("h2")
                                forecastCard5.appendChild(name5)

                                temp5.textContent = `${data.list[4].main.temp}°`
                                temp5.classList.add("temp")
                                forecastCard5.appendChild(temp5)

                                humidity5.textContent = `Humidity: ${data.list[4].main.humidity}%`
                                humidity5.classList.add("p")
                                forecastCard5.appendChild(humidity5)

                                windSpeed5.textContent = `Wind Speed: ${data.list[4].wind.speed} mph`
                                windSpeed5.classList.add("p")
                                forecastCard5.appendChild(windSpeed5)
                            })

                        })
            })
    } else {
        displayError()
        }

    
})

// Display error function
function displayError() {
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = "Please enter a valid city"
    errorDisplay.classList.add("error")
    card.textContent = ""
    card.style.display = "block"
    card.appendChild(errorDisplay)
}