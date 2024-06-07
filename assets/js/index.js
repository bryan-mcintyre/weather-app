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
                        const temp = document.createElement("p")
                        const humidity = document.createElement("p")

                        card.textContent = ""

                        temp.textContent = data[0].temp
                        humidity.textContent = data[0].humidity
                        card.appendChild(temp)
                        card.appendChild(humidity)

                        for (let i = 0; i < data.length; i++) {
                            const temp = document.createElement("p")
                            const humidity = document.createElement("p")
                            card.textContent = ""
                            temp.textContent = data[i].main.temp
                            humidity.textContent = data[i].main.humidity
                            card.appendChild(temp)
                            card.appendChild(humidity)
                    }})
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