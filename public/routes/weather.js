
fetch('https://api.openweathermap.org/data/2.5/weather?id=1526273&appid=df56142940b6171cf11d2df09626338d')
    .then(function (resp){return resp.json() })
    .then(function (data){
        console.log(data);
        document.querySelector('.flex-grow-1').innerHTML=data.name;
        document.querySelector('.display-4').innerHTML=Math.round(data.main.temp-273)+'&deg';
        document.querySelector('.fa-wind').textContent=data.weather[0]
            ['description'];
        document.querySelector('.fa-sun').innerHTML=data.wind.speed;
    })

    .catch(function (){
        //errors
    });
