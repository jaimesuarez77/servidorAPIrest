// traigo de mongoose el modelo y el esquema de datos
const {model, Schema} = require('mongoose');
//creo el esqueleto de los datos que va a tener cada documento

const EsquemaReserva=Schema({
    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente :{
        type:String,
        required:true
    },
    telefonoCliente:{
        type:Number,
        required: true
    },
    FechaInicial : {
        type:String,
        required:true

    },
    FechaFinal:{
        type:String,
        required:true
    },
    diasEstadia:{
        type:Number,
        required:true
    },
    tipoPaquete:{
        type:String,
        required :true,
        enum: ['Dorado', 'Plata']
    } 
});

module.exports=model('Reserva',EsquemaReserva);