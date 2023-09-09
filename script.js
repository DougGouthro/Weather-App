// element ref variables
var citySearchInput = document.querySelector("#citysearch")
var citySearchButton = document.querySelector("#searchbutton")
var openWeatherAPIkey = "55937e794826286f8f543c07b1a5bb4e"
var currentCity = document.querySelector("#currentCity")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humm = document.querySelector("#humm")
var fiveDayArea = document.querySelector("#fiveDays")
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
            fiveDayArea.innerHTML=""
            for (var i =0; i < allWeatherinfo.length; i+=7){
                //console.log(allWeatherinfo[i])
                fiveDayweather.push(allWeatherinfo[i])
            }
             console.log(fiveDayweather)
            currentCity.innerHTML = data.city.name +`<img src=" https://openweathermap.org/img/wn/${fiveDayweather[0].weather[0].icon}@2x.png" alt="Icon for the day">`
            temp.textContent = "Temp: "+fiveDayweather
            [0].main.temp
            wind.textContent = "Wind:" +fiveDayweather[0].wind.speed
            humm.textContent = "Humm:" + fiveDayweather[0].main.humidity
            for (var i =1; i<fiveDayweather.length;i++){
                var cardTemplet = `
                <div class="col border border-success">
                          <ul>
                            <li>${fiveDayweather[i].dt_txt.split(" ")[0]}</li>
                            <li>
                            <img src=" https://openweathermap.org/img/wn/${fiveDayweather[i].weather[0].icon}@2x.png" alt="Icon for the day">
                            </li>
                            <li>Temp:${fiveDayweather[i].main.temp}</li>
                            <li>Wind:${fiveDayweather[i].wind.speed}</li>
                            <li>Humm:${fiveDayweather[i].main.humidity}</li>
                          </ul>
                        </div>
                `
                fiveDayArea.innerHTML+=cardTemplet
            }
        })
}
// int
citySearchButton.addEventListener("click",citySearch)
