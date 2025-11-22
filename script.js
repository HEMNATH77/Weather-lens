const api = "4e76581cb370087d3f5d406d7def168a";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton  = document.querySelector(".search button");

const weather_icon = document.querySelector(".icon")

async function weathercheck(city) {
    const response = await fetch(url + city + `&appid=${api}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{

    var a = await response.json()

    // console.log(a)
    

    document.querySelector(".city").innerHTML = a.name;
    document.querySelector(".temp").innerHTML = Math.round(a.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = a.main.humidity + '%';
    document.querySelector(".wind").innerHTML = a.wind.speed + " kmph";
    document.querySelector(".m").innerHTML = a.weather[0].main;

    if (a.weather[0].main=="Clouds"){
        weather_icon.src = "images/clouds.png"
    }
    else if (a.weather[0].main=="Clear"){
        weather_icon.src = "images/clear.png"
    }
    else if (a.weather[0].main=="Mist"){
        weather_icon.src = "images/mist.png"
    }
    else if (a.weather[0].main=="Drizzle"){
        weather_icon.src = "images/drizzle.png"
    }
    else if (a.weather[0].main=="Rain"){
        weather_icon.src = "images/rain.png"
    }

    else if (a.weather[0].main=="Snow"){
        weather_icon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display ="block"
    document.querySelector(".error").style.display ="none"
}

}

searchbutton.addEventListener("click",()=>{
    weathercheck(searchbox.value);
})

searchbox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        weathercheck(searchbox.value);
    }
})
