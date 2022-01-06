const randomApi = "https://randomuser.me/api";
axios.get(randomApi)
.then(response => {
    console.log(response.data.results[0].email);
    return axios.get(randomApi);
})
.then(response => {
    console.log(response.data.results[0].email);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("fetches complete");
});
