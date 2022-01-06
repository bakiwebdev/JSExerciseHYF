const randomApi = "https://randomuser.me/api";


// // My Solution
// const getRandomUser = () => {
//   axios
//     .get(randomApi)
//     .then((response) => {
//       console.log(response.data.results[0].gender);
//       console.log(response.data.results[0].email);
//     })
//     .catch((error) => {
//       console.log(`Error : ${error}`);
//     });
// };

// axios
//   .get(randomApi)
//   .then((response) => {
//     console.log(response.data.results[0].gender);
//     console.log(response.data.results[0].email);
//     if (response.data.results[0].gender === "male") {
//       getRandomUser();
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });


//   ##Solution from HYF video

  axios.get(randomApi).then(response => {
      console.log(`Person 1 gender is ${response.data.results[0].gender}`)
      if(response.data.results[0].gender == 'male')
      {
          return axios.get(randomApi);
      }
      else {
          return `It's a female`
      }
  }).then(response => {
      console.log(console.log(`Person 2 gender is ${response.data.results[0].gender}`));
  }).catch(error => {
      console.log(`Error: ${error}`)
  })