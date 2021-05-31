//importo el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js');

//se trae el paquete de enviroment
require('dotenv').config()

//instacio (saco fotocopia del servidor)
let servidor=new ServidorModelo();

//levanto el servidor
servidor.despertarServidor();


    //se ejecuta en la terminal con 'node app.js'
    //nodemon app.js

