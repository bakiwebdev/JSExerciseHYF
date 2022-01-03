const button = document.querySelector("button");

button.addEventListener("click", () => getWeather());

function showDataInParagraphElement(data) {
  const p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function getWeather() {
  // Create XML HTTP Request Object
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  // Crate url endpoint
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=Groningen&appid={your token}&units=metric";
  // Open the connection
  xhr.open("GET", url);
  // Send the request
  xhr.send();
  // Add event listener to the request
  xhr.onload = function () {
    if (xhr.status < 400) {
      showDataInParagraphElement(
        "The temperature is -> " + xhr.response.main.temp
      );
      showDataInParagraphElement(
        "The pressure is -> " + xhr.response.main.pressure
      );
      showDataInParagraphElement(
        "The humidity is -> " + xhr.response.main.humidity
      );
    }
    else {
      console.log(`Something went wrong ` + xhr.status)
    }
  };
}
