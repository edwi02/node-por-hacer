

const fs = require('fs');

let listadoPorHacer = [];

const  guardarDB = () => {
    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if ( err )
            throw new Error('No se pudo grabar');
        // else   
        //     return console.log('Tarea creada');
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch ( error ) {
        listadoPorHacer = [];
    }

}

const crear = ( descripcion ) => {
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ( descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if ( index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = ( descripcion ) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

    /* Opción 2. Exluir el elemento
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (lstadoPorHacer.length === nuevoListado.length ) {
        return false;
    } else {
        listadoPorhacer = nuevoListado;
        gurdarDB();
    }
     */

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}