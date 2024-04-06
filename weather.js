const apiKey = "e521bd746554a1f79d8b583520d22182";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=valletta";

    async function checkWeather(){
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }

checkWeather();