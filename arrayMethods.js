/* const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

let nombre = argv.nombre;
let edad = argv.edad;
let estatura = argv.estatura;

// armar padawam
function crearAprendiz(nombre,edad,estatura){
    let aprendiz= {
        nombre:nombre,
        edad:edad,
        estatura:estatura
    }
    console.log(aprendiz);
}*/

let hoteles = [
    {id:"hot001",nombre:"Hilton Garden",region:"Caribe",costoNoche:25000,disponible:true,estrellas:5},
    {id:"hot002",nombre:"Hotel madre selva",region:"Amazonas",costoNoche:85000,disponible:true,estrellas:3},
    {id:"hot003",nombre:"Mercure Santa Marta",region:"Caribe",costoNoche:22700,disponible:true,estrellas:4},
    {id:"hot004",nombre:"Hotel Niquimar",region:"Pasifico",costoNoche:10000,disponible:true,estrellas:3},
    {id:"hot005",nombre:"Cabaña la marea",region:"Pasifico",costoNoche:15000,disponible:true,estrellas:3},
    {id:"hot006",nombre:"Reserva natural Tanimoboca",region:"Amazonas",costoNoche:30000,disponible:true,estrellas:3}


]
//con funcion flecha, flitra los resutado en un arreglo y trae varios valores...
let resultado = hoteles.filter((hotel)=>hotel.region=="Caribe");

// con funcion tradicional... encuentra un solo valor
resultado = hoteles.find(function(hotel){
    return(hotel.id=="hot001");
});

resultado = hoteles.some((hotel)=>hotel.id=="hot006");

resultado = hoteles.reduce(function(acumulador,hotel){
    return (hotel.estrellas+acumulador);
},0);



console.log(resultado);
