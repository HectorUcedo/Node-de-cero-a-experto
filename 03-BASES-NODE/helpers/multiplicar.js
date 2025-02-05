const fs = require('fs');
let colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    //return new Promise( (resolve, reject) => {

        try {

            let salida = '';    
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
        
                salida  += `${ base } 'X' ${i} '=' ${base * i}\n`;
                consola += `${ base } ${ 'X'.green } ${ i } ${ '='.green } ${ base * i }\n`;
                
            }
            
            if(listar){
                //console.clear();
                console.log(' ============= '.green);
                console.log(' Tabla del:'.green, colors.blue( base ) );
                console.log(' ============= '.green);
                console.log(consola);
            }
        
            //console.log(salida);
            // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            //     if (err) throw err;
            //     console.log('tabla-5.txt creado');
            // });
        
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
            //resolve(`tabla-${base}.txt creado`)
            return `tabla-${base}.txt creado`
            
        } catch (err) {
            throw err
        }


        
    };


module.exports = {
    // function: crearArchivo
    // crearArchivo: crearArchivo
    crearArchivo // Optimización
}