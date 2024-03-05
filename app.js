const { crearArchivo } = require('./helpers/multiplicar');

const  argv  = require('./config/yargs');

//Impriman la tabla del 5 por consola


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado') )
    .catch(err => console.log( err ) );

//const [, , arg3 = 'base = 5'] = process.argv;
//const [, base ] = arg3.split('=');

//const base = 5;