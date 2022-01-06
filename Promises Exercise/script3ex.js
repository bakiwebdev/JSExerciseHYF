function wait(milSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //do something
      resolve();
    }, milSeconds);
  });
}

wait(1000)
  .then(() => {
    console.log("1s passed");
  })
  .catch(() => {
    console.log("error");
  });
