// WEATHER DASHBOARD

// Globally declard variables
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "d1f494054696aa2d95d7b146eb42db19"

// Form submit event listener
weatherForm.addEventListener("click", function(event) {
    event.preventDefault()

    const city = cityInput.value

    if(city) {

    } else {
        displayError()
    }
})

// API fetch request
fetch()

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