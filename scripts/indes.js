 // create a weather app

    // 1. Accept input -->city name
    // 2. fetch weather data (How ?)
    // 3. Find correct API endpoint (url)
    // //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    // let key = "";
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f54708523bef7b62ad34716409be8714`
    async function getWeather() {
        try {
            let city = document.querySelector("#city").value;

            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f54708523bef7b62ad34716409be8714&units=metric`);
            let data = await response.json();


            // seven days weather
            let lon = data.coord.lon;
            let lat = data.coord.lat;

            let response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=f54708523bef7b62ad34716409be8714&units=metric`);

            let data2 = await response2.json();
            console.log(data2);

            displayWeather(data);
            sevenDaysWeather(data2.daily);
            console.log("Data: ", data);

        }
        catch (error) {
            console.log("Error :", error);
        }
    }
    // getWeather();




    var sevenDay = document.querySelector(".sevenDayDiv");
    function displayWeather(weather) {
        sevenDay.innerHTML = "";
        document.querySelector(".oneDayDiv").innerHTML = "";
        let cityNameDiv = document.createElement("div");
        cityNameDiv.setAttribute("class", "cityNameDiv");
        let weatherDiv = document.createElement("div");
        weatherDiv.setAttribute("class", "weatherDiv");
        let ctityName = document.createElement("h2");
        let temperature = document.createElement("p");
        let pressure = document.createElement("p");
        let humidity = document.createElement("p");
        let mintemp = document.createElement("p");
        let maxTemp = document.createElement("p");
        let windSpeed = document.createElement("p");
        let sunRise = document.createElement("p");
        let sunSet = document.createElement("p");
        let country = document.createElement("p");
        let dateh = document.createElement("h2");
        let iconDiv = document.createElement("div");
        let icons = document.createElement("img");

        dateh.innerText = new Date().toDateString();

        let riseDate = new Date((weather.sys.sunrise) * 1000);
        let rhour = riseDate.getHours();
        let rminute = riseDate.getMinutes();
        let risetime = `${rhour}:${rminute}`;

        let setDate = new Date((weather.sys.sunset) * 1000);
        let shour = setDate.getHours();
        let sminute = setDate.getMinutes();

        let setime = `${shour}:${sminute}`

        icons.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        windSpeed.innerText = `Wind Speed ${weather.wind.speed}km/h`
        mintemp.innerText = `Min Temp -${Math.floor(weather.main.temp_min)} °C`;
        maxTemp.innerText = `Max Temp -${Math.floor(weather.main.temp_max)} °C`;
        sunRise.innerText = `Sun Rise -${risetime}am`;
        sunSet.innerText = `Sun Set -${setime}pm`;
        ctityName.innerText = weather.name;
        temperature.innerText = `${Math.floor(weather.main.temp)} °C`;
        pressure.innerText = `Pressure -${weather.main.pressure}`;
        humidity.innerText = `Humidity -${weather.main.pressure}`;
        country.innerText = `Country - ${weather.sys.country}`;

        iconDiv.append(icons);
        cityNameDiv.append(dateh, ctityName, temperature, iconDiv)
        weatherDiv.append(mintemp, maxTemp, sunRise, sunSet, country, pressure, humidity, windSpeed);
        document.querySelector(".oneDayDiv").append(cityNameDiv, weatherDiv);

        showMap();
    }

    function showMap() {
        document.querySelector(".rightSideDiv").innerHTML = "";
        let city = document.querySelector("#city").value;
        var iframe = document.createElement("iframe");
        iframe.setAttribute("id", "gmap_canvas");

        iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


        document.querySelector(".rightSideDiv").append(iframe);
    }

    function sevenDaysWeather(seven) {
        seven.map(function (tmp) {

            let div = document.createElement("div");
            let imgDiv = document.createElement("div");
            let icon = document.createElement("img");
            let day = document.createElement("p");
            let maxtmp = document.createElement("p");
            let mintmp = document.createElement("p");

            let date = new Date(tmp.dt * 1000);
            if (date.getDay() == 0) {
                day.textContent = "Sun";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 1) {
                day.textContent = "Mon";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 2) {
                day.textContent = "Tue";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 3) {
                day.textContent = "Wed";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 4) {
                day.textContent = "Thu";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 5) {
                day.textContent = "Fri";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            else if (date.getDay() == 6) {
                day.textContent = "Sat";
                icon.src = `https://openweathermap.org/img/wn/${tmp.weather[0].icon}@2x.png`;
                maxtmp.textContent = `Max-${Math.floor(tmp.temp.max)} °C`;
                mintmp.textContent = `Min-${Math.floor(tmp.temp.min)} °C`;
            }
            imgDiv.append(icon);
            div.append(day, imgDiv, maxtmp, mintmp);
            sevenDay.append(div);

        });

    }

