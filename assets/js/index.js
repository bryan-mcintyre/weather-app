// WEATHER DASHBOARD

// Globally declard variables
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "d1f494054696aa2d95d7b146eb42db19"

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
                for (let i = 0; i < data.length; i++) {
                    const lat = document.createElement("p")
                    const lon = document.createElement("p")
                    card.textContent = ""
                    lat.textContent = data[i].lat
                    lon.textContent = data[i].lon
                    card.appendChild(lat)
                    card.appendChild(lon)
                    localStorage.setItem("lat", data[i].lat)
                    localStorage.setItem("lon", data[i].lon)
                }

                // localStorage.setitem("City")
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