// WEATHER DASHBOARD

// Globally declard variables
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "d1f494054696aa2d95d7b146eb42db19"
let cityData = []

// Form submit event listener and API fetch request with error for invalid form submission
weatherForm.addEventListener("click", function(event) {
    event.preventDefault()

    const city = cityInput.value

    if(city) {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
            .then(function(response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                localStorage.setItem("City-Data", JSON.stringify(data))

                const cityLat = data[0].lat
                const cityLon = data[0].lon

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

                        })
            })
    } else {
        displayError()
        }

    
})


        
// Display weather info
function displayWeatherInfo() {
    
        
                    
    }


// Current conditions emojis
function weatherEmoji() {

}

// Display error function
function displayError() {
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = "Please enter a valid city"
    errorDisplay.classList.add("error")
    card.textContent = ""
    card.style.display = "block"
    card.appendChild(errorDisplay)
}