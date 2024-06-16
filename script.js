const apikey = "ad8bd9f945e18000d8c31a118b3b8748";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox= document.querySelector(".search input");
    const searchBtn= document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkweather(city){
        const response = await fetch(apiUrl + city +`&appid=${apikey}`)

        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display = "none";
        }else{
        var data=await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C ";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.jpeg";

    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.jpeg";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.jpeg";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    } 
    }
    searchBtn.addEventListener("click",()=>{
        checkweather(searchBox.value);
    })