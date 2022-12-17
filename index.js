const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
// const db = require('./src/models/server.js');

app.use(function (req, res, next){
 //Enabling cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-clint-key, x-client-token, x-client-secret, Authorization");
    next();
 });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({message: "API MASCOTAS"});
});


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
