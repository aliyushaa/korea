const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': 'd2f078f794msh03d5022216006bfp18e0bfjsn9d43ed790860'
    }
};

fetch('https://sephora.p.rapidapi.com/auto-complete?q=%3CREQUIRED%3E', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));