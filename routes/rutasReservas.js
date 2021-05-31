//Traigo el metodo router de express para personalizar mis rutas
const {Router} = require('express');

//importar los controladores
    
    const {buscarReserva}=require('../controllers/controladorReserva');
    const {buscarReserva1}=require('../controllers/controladorReserva');
    const {agregarReserva}=require('../controllers/controladorReserva');
    const {editarReserva}=require('../controllers/controladorReserva');
    const {eliminarReserva}=require('../controllers/controladorReserva');



    //impotar validaciones
    const {validarPeticion}= require('../validations/validaciones.js');
//importar metodo check
    const {check}= require('express-validator');

    //crear una lista de valñidaciones (arreglo)
    let validaciones=Array(
        check('nombreCliente','el campo es obligatorio').not().isEmpty(),
        check('apellidoCliente','el campo es obligatorio').not().isEmpty(),
        check('telefonoCliente','el campo es obligatorio').not().isEmpty(),
        check('FechaInicial','el campo es obligatorio').not().isEmpty(),
        check('FechaFinal','el campo es obligatorio').not().isEmpty(),
        check('diasEstadia','el campo es obligatorio').not().isEmpty(),
        check('tipoPaquete','el campo es obligatorio').not().isEmpty(),
        validarPeticion
    );

    
   

    //Personalizo mis rutas
    const rutas=Router();

    //Listado de rutas
    rutas.get('/reservas',buscarReserva);
    rutas.get('/reserva/:id',buscarReserva1);
    rutas.post('/reserva/nueva',validaciones,agregarReserva);
    rutas.put('/reserva/editar/:id',editarReserva);
    rutas.delete('/reserva/eliminar/:id',eliminarReserva);

   


    //Exporto las rutas
    module.exports=rutas;

