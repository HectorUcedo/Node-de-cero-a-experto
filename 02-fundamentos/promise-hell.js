const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

//const getEmpleado = ( id, callback ) => {
const getEmpleado = ( id ) => {

    // El resolve es un callback
    return new Promise( ( resolve, reject ) =>  {

        const empleado = empleados.find( e => e.id === id )?.empleado;
        
        // Operador ternarios
        ( empleado )
            ? resolve(empleado)
            : reject( `No existe empleado con el id ${ id }` );
    });
}

const getSalario = ( id ) => {

    return new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;
    
        ( salario )
            ? resolve( salario )
            : reject( `No existe salario para el id ${ id } no existe` );

    });
};

const id = 1;

//getEmpleado(id)
//    .then( empleado => console.log( empleado ))
//    .cach( err => console.log( err ));

//getSalario( id )
//    .then( salario => console.log(salario))
//    .cach( err => console.log(err))


getEmpleado( id )
    .then( empleado => {
        
        getSalario( id )
            .then( salario => {

                console.log('El empleado:', empleado, 'tiene un salario de: ', salario);

            })
            .catch( err => console.log(err))
            
        })
        .catch( err => console.log(err))