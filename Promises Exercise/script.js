function fetchJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", url);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      callback(null, xhr.response.results);
    } else {
      callback(`Error: ${xhr.status}`, null);
    }
  };
  xhr.onerror = () => {
    callback("Error: network error", null);
  };

  xhr.send();
}

// fetchJson('https://randomuser.me/api',(error, response) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// })

function fetchJsonSynchronous() {
  let timesExecuted = 0;
  const randomApi = "https://randomuser.me/api";
  fetchJson(randomApi, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`${++timesExecuted} . ${data[0].email}`);
      fetchJson(randomApi, (error, data) => {
          if(error)
          {
              console.log(error);
          } else {
              console.log(`${++timesExecuted} . ${data[0].email}`);
          }
      });
    }
  });
}

fetchJsonSynchronous();
// const fetchApi = fetchJsonSynchronous();
