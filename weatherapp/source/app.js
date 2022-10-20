const { response } = require('express');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express()

const weatherData = require('../utils/weatherData');

// ver que puerto esta disponible
const port = process.env.PORT || 3000

// incio 
app.get('', (req, res) => {
  res.send("Hola esta es una aplicacion del clima");
});

// query es lo que viene despues del /clima?adress=---
// estamos contruyendo un api
app.get('/clima', (req, res) => {
  const adress = req.query.adress;
  weatherData(adress, (error, {temperatura, descripcion, nombreCiudad}) => {
    // result debe ser true
    if(error){
      return res.send({
        error
      })
    }
    console.log(temperatura, descripcion, nombreCiudad);
    res.send({
      temperatura,
      descripcion,
      nombreCiudad
    })
  })
});

// error 404

app.listen(port, () => {
  console.log('el servidor esta corriendo en el puerto: ', port)
})