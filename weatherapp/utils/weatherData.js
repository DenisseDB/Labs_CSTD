const request = require('request');
const constants = require('../config');

// funcion con el call back de la data
// construimos el url
const weatherData = (adress, callback) => {
  const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(adress) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
  // body es la info que viene dentro del api y recuperamos la info que queremos mostrar
  request({url, json:true}, (error, {body}) => {
    if(error) {
      callback("No se encontro informacion", undefined) //undefined no hay data que regresar
    }else {
      callback(undefined, {
        // lo que necesitamos de info
        temperatura: body.main.temp,
        descripcion: body.weather[0].description,
        nombreCiudad: body.name
      })
    }
  })

}

module.exports = weatherData;