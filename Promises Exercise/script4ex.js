const generateUser = () => {
  const user = axios
    .get("https://randomuser.me/api/")
    .then((res) => {
      return res.data.results[0];
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};
const promise1 = generateUser();
const promise2 = generateUser();
function showUser() {
  const combinedPromise = Promise.all([promise1, promise2]);
  combinedPromise
    .then((response) => {
      if (response[0].gender == "female" && response[1].gender == "female") {
        console.log("both user are females");
        console.log(`Person 1 gender is ${response[0].gender}`);
        console.log(`Person 2 gender is ${response[1].gender}`);
        console.log(`another generated user`);
        console.log(
          generateUser()
            .then((response) => {
              console.log(response.gender);
            })
            .catch((err) => {
              console.log(err);
            })
        );
        console.log(
          generateUser()
            .then((response) => {
              console.log(response.gender);
            })
            .catch((err) => {
              console.log(err);
            })
        );
      } else {
        console.log(`Person 1 gender is ${response[0].gender}`);
        console.log(`Person 2 gender is ${response[1].gender}`);
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

showUser();
