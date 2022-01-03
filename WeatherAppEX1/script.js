const printTextOnHTMLFile = function (text) {
  // Create P element
  const p = (document.createElement('p'));
  p.innerText = text
  // find body element to append the body
  document.body.appendChild(p);
};

const weatherAPIUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=Groningen&appid={your token}&units=metric";

// Make a request for a user with a given ID
axios.get(weatherAPIUrl)
  .then(function (response) {
    // handle success
    console.log(response);
    printTextOnHTMLFile(`The Current Temperature in Groningen is ${response.data.main.temp}`);
    printTextOnHTMLFile(`The Current Pressure in Groningen is ${response.data.main.pressure}`);
    printTextOnHTMLFile(`The Current Humidity in Groningen is ${response.data.main.humidity}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
