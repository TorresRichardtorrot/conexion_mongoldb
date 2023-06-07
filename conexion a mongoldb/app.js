require('dotenv').config();
const express = require('express');
const app = express();//crea una nueva aplicacion en la variable

//para poder utilizar el modulo de mongosoe
const mongoose = require('mongoose');

(async()=>{
    try{
        await mongoose.connect(process.env.KEY);
        console.log('**** CONEXION CORRECTA ****')
    }catch(error){
        console.log(error)
    }
})()

app.use(express.json())

module.exports = app;

