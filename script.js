// element ref variables
var citySearchInput = document.querySelector("#citysearch")
var citySearchButton = document.querySelector("#searchbutton")
var openWeatherAPIkey = "55937e794826286f8f543c07b1a5bb4e"
// globale variables
// functions
function citySearch(event) {
    event.preventDefault()
    var cityname = citySearchInput.value
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid="+openWeatherAPIkey) 
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            cityData(data)
        })
}
function cityData(event){
    console.log(event)
    console.log(event.city)
    var name = event.city.name
    console.log(name)
}
// int
citySearchButton.addEventListener("click",citySearch)


