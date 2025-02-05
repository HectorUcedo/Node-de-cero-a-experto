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
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

//const getEmpleado = ( id, callback ) => {
const getEmpleado = ( id ) => {

    // El resolve es un callback
    return new Promise( ( resolve, reject ) =>  {

        const empleado = empleados.find( e => e.id === id )?.nombre;
        
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

const getInfoUsuario = async( id ) => {

    //return 'Hola Mundo';
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `El salario del empleado ${ empleado }, es de ${ salario }`;
        
    } catch (error) {
        //return error;
        throw error; // Se llama el Reject de la funcion asincrona
    }

}

const id = 3;
getInfoUsuario( id )
.then( msg => {
    console.log('TODO BIEN!')
    console.log(msg)
})
.catch( err => {
    console.log('TODO MAL!')
    console.log(err)
});

//const id = 1;