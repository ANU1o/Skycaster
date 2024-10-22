const toTop = () => {
  document.getElementsByTagName("main")[0].scrollTo(0, 0);
};

const toggleDarkLight = () => {
  document.body.getAttribute("theme-mode") === "light"
    ? document.body.setAttribute("theme-mode", "dark")
    : document.body.setAttribute("theme-mode", "light");
};

const setTheme = () => {
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
    document.body.setAttribute("theme-mode", "dark");
};

searchData = () => {
  place = pname.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a`
  )
    .then((data) => data.json())
    .then((data) => displayData(data));

  displayData = (data) => {
    weatherIcon = data.weather[0].icon;
    document.getElementById("content").innerHTML = `
		<div id="result">
            <div id="weather-condition">
			<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" />
			<span >${data.weather[0].main}</span>
			</div>
            <div id="base-value-grid">
              <div><span>${(data.main.temp - 273.15).toFixed(2)}</span> °C</div>
              <div><span>${data.main.humidity}</span> %</div>
              <div><span>${data.wind.speed}</span> km/h</div>
            </div>
            <div id="location-container">
              <i class="fa-solid fa-globe"></i>
              <span id="location-name">${data.name}</span>
              <span>[<span>${data.coord.lon}</span>, <span>${
      data.coord.lat
    }</span>]</span>
              <span>${new Date(data.dt * 1000 + data.timezone * 1000)}</span>
            </div>
          </div>
		`;
    hum.innerHTML = data.main.humidity;
    ws.innerHTML = data.wind.speed;
    wd.innerHTML = data.wind.deg;
    if (weatherIcon.charAt(weatherIcon.length - 1) == "d") {
      document.getElementById("home").style =
        "background:url(./assets/images/backgrounds/daybg.jpg) center/cover no-repeat fixed";
      document.getElementById("content").style =
        "background-color:var(--day-brand)";
    } else if (weatherIcon.charAt(weatherIcon.length - 1) == "n") {
      document.getElementById("home").style =
        "background:url(./assets/images/backgrounds/nightbg.jpg) center/cover no-repeat fixed";
      document.getElementById("content").style =
        "background-color:var(--night-brand)";
    }
  };
};

geoPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posFinding);
  } else {
    x.innerHTML = "GPS is not supported by this browser.";
  }

  function posFinding(position) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b41ec3be35c7dac8aabbc21ba253137a`
    )
      .then((data) => data.json())
      .then((data) => displayData(data));

    displayData = (data) => {
      weatherIcon = data.weather[0].icon;
      document.getElementById("content").innerHTML = `
		<div id="result">
            <div id="weather-condition">
			<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" />
			<span >${data.weather[0].main}</span>
			</div>
            <div id="base-value-grid">
              <div><span>${(data.main.temp - 273.15).toFixed(2)}</span> °C</div>
              <div><span>${data.main.humidity}</span> %</div>
              <div><span>${data.wind.speed}</span> km/h</div>
            </div>
            <div id="location-container">
              <i class="fa-solid fa-globe"></i>
              <span id="location-name">${data.name}</span>
              <span>[<span>${data.coord.lon}</span>, <span>${
        data.coord.lat
      }</span>]</span>
              <span>${new Date(data.dt * 1000 + data.timezone * 1000)}</span>
            </div>
          </div>
		`;
      hum.innerHTML = data.main.humidity;
      ws.innerHTML = data.wind.speed;
      wd.innerHTML = data.wind.deg;
      if (weatherIcon.charAt(weatherIcon.length - 1) == "d") {
        document.getElementById("home").style =
          "background:url(./assets/images/backgrounds/daybg.jpg) center/cover no-repeat fixed";
        document.getElementById("content").style =
          "background-color:var(--day-brand)";
      } else if (weatherIcon.charAt(weatherIcon.length - 1) == "n") {
        document.getElementById("home").style =
          "background:url(./assets/images/backgrounds/nightbg.jpg) center/cover no-repeat fixed";
        document.getElementById("content").style =
          "background-color:var(--night-brand)";
      }
    };
  }
};

searchMData = () => {
  place = pmname.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a`
  )
    .then((data) => data.json())
    .then((data) => displayData(data));

  displayData = (data) => {
    weatherIcon = data.weather[0].icon;
    document.getElementById("content").innerHTML = `
		<div id="result">
            <div id="weather-condition">
			<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" />
			<span >${data.weather[0].main}</span>
			</div>
            <div id="base-value-grid">
              <div><span>${(data.main.temp - 273.15).toFixed(2)}</span> °C</div>
              <div><span>${data.main.humidity}</span> %</div>
              <div><span>${data.wind.speed}</span> km/h</div>
            </div>
            <div id="location-container">
              <i class="fa-solid fa-globe"></i>
              <span id="location-name">${data.name}</span>
              <span>[<span>${data.coord.lon}</span>, <span>${
      data.coord.lat
    }</span>]</span>
              <span>${new Date(data.dt * 1000 + data.timezone * 1000)}</span>
            </div>
          </div>
		`;
    hum.innerHTML = data.main.humidity;
    ws.innerHTML = data.wind.speed;
    wd.innerHTML = data.wind.deg;
    if (weatherIcon.charAt(weatherIcon.length - 1) == "d") {
      document.getElementById("home").style =
        "background:url(./assets/images/backgrounds/daybg.jpg) center/cover no-repeat fixed";
      document.getElementById("content").style =
        "background-color:var(--day-brand)";
    } else if (weatherIcon.charAt(weatherIcon.length - 1) == "n") {
      document.getElementById("home").style =
        "background:url(./assets/images/backgrounds/nightbg.jpg) center/cover no-repeat fixed";
      document.getElementById("content").style =
        "background-color:var(--night-brand)";
    }
  };
};
