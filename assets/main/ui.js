class UI {
  constructor() {
    this.feelslike = document.getElementById("feels-like");
    this.location = document.getElementById("location");
    this.desc = document.getElementById("desc");
    this.humidity = document.getElementById("_humidity");
    // this.dewPoint = document.getElementById('_dew-point')
    this.pressure = document.getElementById("_pressure");
    // this.icon = document.getElementById("icon");
    this.lat = document.getElementById("_lattitude");
    this.long = document.getElementById("_longitude");
    this.temp = document.getElementById("temp");
    this.mintemp = document.getElementById("mintemp");
    this.maxtemp = document.getElementById("maxtemp");
    this.groundLevel = document.getElementById("ground-level");
    this.seaLevel = document.getElementById("sea-level");
    this.sunrise = document.getElementById("sunrise");
    this.sunset = document.getElementById("sunset");
    this.timeZone = document.getElementById("timezone");
    this.deg = document.getElementById("deg");
    this.speed = document.getElementById("speed");
    this.displayText = document.getElementById("display-text");
  }

  paint(weather) {
    this.location.textContent = `${weather.name} ${weather.sys.country}`;
    this.desc.textContent = ` ${weather.weather[0].main} , ${weather.weather[0].description}`;
    this.feelslike.textContent = `Feels Like : ${weather.main.feels_like}`;
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
    // this.icon.setAttribute("src", weather.weather[0].icon);
    // this.dewPoint.textContent = `Dew Point : ${weather.main.dew_point}`
    this.pressure.textContent = `Pressure : ${weather.main.pressure}`;
    this.temp.textContent = `Temperature : ${weather.main.temp}`;
    this.mintemp.textContent = `Min Temperature : ${weather.main.temp_min}`;
    this.maxtemp.textContent = `Max Temperature : ${weather.main.temp_max}`;
    // this.groundLevel.textContent = `Ground Level :${weather.main.grnd_level}`;
    // this.seaLevel.textContent = `Sea Level :${weather.main.sea_level}`;
    this.sunrise.textContent = `Sun-rise : ${weather.sys.sunrise}`;
    this.sunset.textContent = `Sun-set : ${weather.sys.sunset}`;
    this.timeZone.textContent = `Time Zone : ${weather.timezone}`;
    this.deg.textContent = `Wind Degree : ${weather.wind.deg}`;
    this.speed.textContent = `Wind Speed : ${weather.wind.speed}`;

    this.lat.textContent = ` Lattitude : ${weather.coord.lat}`;
    this.long.textContent = `Longitude : ${weather.coord.lon}`;

    this.displayText.value = `${weather.name} , ${weather.sys.country}`;
  }
}
