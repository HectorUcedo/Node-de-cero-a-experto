// https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options
// https://www.npmjs.com/package/yargs
// https://www.npmjs.com/package/colors

const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');
console.clear();

//console.log( argv )

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchico => console.log(nombreArchico.rainbow, 'creado') )
    .catch( err => console.log(err));


