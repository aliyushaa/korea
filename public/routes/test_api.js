const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
        'X-RapidAPI-Key': 'd2f078f794msh03d5022216006bfp18e0bfjsn9d43ed790860'
    }
};

/*
fetch('https://makeup.p.rapidapi.com/products.json?product_type=foundation&amp;brand=${query}', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
function searchProduct(query) {
    fetch("https://makeup.p.rapidapi.com/products.json?product_type=${query}", options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then((data) => {
            const results = data.map(el => el.id);
            console.log(results);
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}

window.onload =()=>{
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) =>{
        searchProduct(searchFieldElement);
    }
}