

//setTimeout( function(){
//setTimeout( () => {
  //  console.log('Hola mundo');
//}, 1000 );


//const getUsuarioByID = ( id ) => {
const getUsuarioByID = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Hector'
    }

        setTimeout( () => {
            //console.log(usuario);
            callback(usuario);
        } , 1500);

}

//getUsuarioByID(10);
getUsuarioByID(10, ( usuario )=> {
    console.log( usuario );
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});