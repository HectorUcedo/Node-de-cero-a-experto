

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regenreación',
    //edad: 50,
    getNombre: function( ){
        return `${ this.nombre} ${ this.apellido}`
    }
}

//console.log( deadpool.getNombre() );

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;

//function imprimeHeroe ( heroe ) {

//    const { nombre, apellido, poder} = heroe;
//    console.log( nombre, apellido, poder, edad = 0 )

//};


// Desestructuración de objetos:
function imprimeHeroe ( { nombre, apellido, poder, edad = 0} ) {
    console.log( nombre, apellido, poder, edad = 0 )
};

//imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

//const [ h1, h2, h3 ] = heroes;
const [ , , h3 ] = heroes;

//console.log(h1, h2, h3);
console.log( h3 );