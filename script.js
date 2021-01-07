
const kelvin = 273.15;
var temperatura = document.getElementById('resultado');
var loc = document.getElementById('loc');
var icono = document.getElementById('icono');

function selCiudad(){
    var c = document.getElementById("ciu");
    console.log(c.value);
    pedirClima(c.value, 'cl');
}

const pedirClima = async(ciudad, pais)=>{
    const apiKey='2b38ccff519bd21e7735a9f26ab19e27';
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const {name, weather, main} = resultado;
    console.log(weather[0].icon);
    console.log(weather);
    loc.innerHTML=`Ciudad : ${name}`;
    icono.innerHTML=`<img src="icons/${weather[0].icon}.png"></br><h3>${weather[0].main}</h3>`;
    temperatura.innerHTML=`<h1>Temp: ${ parseFloat(main.temp-kelvin,10).toFixed(1)}&#x2103</h1></br>`;
}