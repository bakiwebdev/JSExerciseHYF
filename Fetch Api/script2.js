const baseShowUrl = 'https://api.tvmaze.com/search/shows?q='
function searchShow(query) {
    fetch(baseShowUrl + query)
    .then(response => response.json())
    .then(data => {
        // showNames = data.map((element) => {
        //     return element.show.name;
        // })
        // console.log(showNames);
        updateList(data);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
}

// Create input element
const textInput = document.createElement('input');
textInput.type = 'text';
textInput.placeholder = 'Search any show';
textInput.onkeyup = () => {
    if(textInput.value.length > 0) {
        searchShow(textInput.value);
    }
}
// Create list element
const list = document.createElement('ul');

// Update the list element
function updateList(data) {
    list.innerHTML = '';
    data.forEach(element => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = element.show.url;
        a.innerText = element.show.name;
        li.appendChild(a);
        list.appendChild(li);
    })
}


window.onload = () => {
    document.body.appendChild(textInput);
    document.body.appendChild(list);
}