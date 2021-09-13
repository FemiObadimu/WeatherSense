// 66TFIvsXhGjTRLd7gygXSIvCt6El7jy5

class Weather {
  constructor(city, country) {
    this.api = "d3506171dcaaab961831681f0689098c";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}




//class Component 
