const {crearArchivo}=require('./helpers/multiplicar');
const argv =require ('./config/yargs.js');
const colors = require('colors/safe');


console.clear();

//console.log(process.argv);

//Funcionamiento de Yargs
//console.log(argv);

//console.log('base de yargs:', argv.b);

//Hay muchos inconvenientes al poder realizar esto como es el hecho de la posicion y el split para poder realizar esto

//console.log(process.argv);
//const[,,arg3='base=5']=process.argv;
//const[, base]=arg3.split('=')
//console.log(base);

//const base= 11;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log(colors.america(nombreArchivo), colors.rainbow('creado con exito')))
    .catch(err=>console.log(err));


    