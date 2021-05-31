//importo la funcion validationResult
const { body, validationResult } = require('express-validator');

//Importar de express la variables request y response
const {request,response}=require('express');

//creo funcion para detectar errores
function validarPeticion(req=request,res=response, next){
    let errores = validationResult(req);
    if(!errores.isEmpty()){
        return(res.status(400).json(errores))
    }
    next();
}
module.exports= {validarPeticion}