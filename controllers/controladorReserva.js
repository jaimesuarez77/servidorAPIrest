//Importar de express la variables request y response
const {request,response}=require('express');


//Importar el modelo de datos del API
const ReservaModelo = require('../models/ReservaModelo.js')

// Secrean funciones para cada uno de los servicios

async function buscarReserva(req=request,res=response){
    let datosReserva = await ReservaModelo.find()
    res.json({
        estado:true,
        mensaje:datosReserva
    });
}
async function buscarReserva1(req=request,res=response){
    let id=req.params.id;
  
    let datosReserva = await ReservaModelo.findById(id)
    res.json({
        estado:true,
        mensaje:datosReserva
    });
}
async function agregarReserva(req=request,res=response){
    let datosReserva = req.body;

    let reserva = new ReservaModelo(datosReserva);
    await reserva.save();
    
    res.json({
        estado:true,
        mensaje:"Reserva agregada con exito",
        datos:reserva
    });
}
async function editarReserva(req=request,res=response){
    let id=req.params.id;
    let datosReserva = req.body;
    await ReservaModelo.findByIdAndUpdate(id,datosReserva);
    res.json({
        estado:true,
        mensaje:" Actualizado con exito"
    });
}
async function eliminarReserva(req=request,res=response){
    let id=req.params.id;
    await ReservaModelo.findByIdAndDelete(id)
    res.json({
        estado:true,
        mensaje:" Eliminado con exito"
    });
}
// Exporto todas las funciones al archivo de rutas
module.exports={
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva,
    buscarReserva1
}