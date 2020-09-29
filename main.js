

function showLocation() {
    navigator.geolocation.watchPosition(showPosition);
  }

function showPosition(position) {
const location = document.getElementById("location");
  location.innerHTML = "<br>Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}