// element ref variables
var citySearchInput = document.querySelector("#citysearch")
var citySearchButton = document.querySelector("#searchbutton")
var openWeatherAPIkey = "55937e794826286f8f543c07b1a5bb4e"
var currentCity = document.querySelector("#currentCity")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humm = document.querySelector("#humm")
// globale variables
// functions
function citySearch(event) {
    event.preventDefault()
    var cityname = citySearchInput.value
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid="+openWeatherAPIkey+"&units=imperial") 
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
            //console.log(data.list)
            var allWeatherinfo =data.list
            var fiveDayweather = []
            for (var i =0; i < allWeatherinfo.length; i+=7){
                //console.log(allWeatherinfo[i])
                fiveDayweather.push(allWeatherinfo[i])
            }
             console.log(fiveDayweather)
            currentCity.textContent = data.city.name
            temp.textContent = "Temp: "+fiveDayweather[0].main.temp
        })
}
// int
citySearchButton.addEventListener("click",citySearch)
