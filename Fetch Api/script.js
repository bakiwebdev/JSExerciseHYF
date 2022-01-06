
// a function to search movie show
function searchShow(query)
{
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    // only response the full header
    .then(response => {
        console.log(response);
        return response.json();/* this return a promise */
    })
    // now fetch / get the data from the promise
    .then(data => {
        console.log('We got the data')
        console.log(data);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

}

searchShow("Simpson")