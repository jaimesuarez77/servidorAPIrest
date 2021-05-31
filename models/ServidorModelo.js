//Se trae el paquete de express
const express = require('express');
const cors = require('cors');
// traer las rutas
const rutas=require('../routes/rutasReservas.js');

// se trae la conexion
const {conectarBD} = require('../database/conexion.js');

class ServidorModelo {

    constructor(){
        //Atributo global para configurar el servidor
        this.app=express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();
    }
    //METODOS (que acciones hace mi servidor)
    despertarServidor(){
        //levantamos el servidor
        this.app.listen(process.env.PORT,()=>console.log(`conectado puerto: ${process.env.PORT}`));
    }
    llamarRutasAPI(){
        this.app.use('/',rutas);
    }
    despertarBaseDatos(){
        conectarBD();
    }
    crearMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json());// JSON
        this.app.use(express.urlencoded({extended:true}));//Recibir datos de la conexion
    }
}

module.exports=ServidorModelo;