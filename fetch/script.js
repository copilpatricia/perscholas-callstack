// let baseURL = 'http://api.weatherapi.com/v1/'
// let apiKey = '9ac8e5f8806b42a1a18141242231212'
// let locations = 'Brooklyn'

// fetch(`${baseURL}current.json?key=${apiKey}&q=${locations}&aqi=no`)
// .then(response => response.json()) // transform into json format - object
// .then(data => console.log(data)) // log the data



const div = document.getElementById("container")
const btn = document.getElementById("change-btn")
btn.addEventListener("click", () => {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        
        div.innerHTML = `
        <img src="${data.message}" width = 200px />
        `
        console.log(data)
    })
})




