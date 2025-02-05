

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demanOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        //demanOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        //demanOption: true,
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .check( (argv, option) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número';
        }
        return true;
    } )
    .argv;


module.exports = argv;