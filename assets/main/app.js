// Initialize Storage Class
const storage = new Storage();
//get data from ls
const weatherdefaultLocation = storage.getLocalStorageData();

// Initialize Weather Class
const weather = new Weather(
  weatherdefaultLocation.city,
  weatherdefaultLocation.country
);
// Initialize UI Class
const ui = new UI();

// LoadContent
document.addEventListener("DOMContentLoaded", getLocationOnLoad);

// change location
document.getElementById("changebtn").addEventListener("click", (e) => {
  storage.getLocalStorageData();
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

    

  weather.changeLocation(city, country);
  // set location in ls
  storage.setLocalStorageData(city, country);

  

  // show getLocationOnLoad
  getLocationOnLoad();

  

  // hide modal
  $("#locationModal").modal("hide");
});

function getLocationOnLoad() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
