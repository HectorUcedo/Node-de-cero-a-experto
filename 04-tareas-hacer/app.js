require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();


const main = async() => {
    console.log('Hola mundo');

    let opt = '';

    do {
        // Esperate a que 
        opt = await mostrarMenu();
        console.log({ opt });
        if(opt !== '0') await pausa();
    } while ( opt !== '0' );

    
    //pausa();

}

main();

