// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando ) {
    case 'crear':

        console.log('Crear ToDo');
        let tarea =  porHacer.crear( argv.descripcion );
        console.log( tarea );

        break;
    case 'listar':
        let listado = porHacer.getListado();

        for(let tarea of listado) {
            console.log(colors.green("==== Por Hacer ===="));
            console.log(tarea.descripcion);
            
            if ( tarea.completado )
                console.log('Estado: ', colors.yellow(tarea.completado));
            else
                console.log('Estado: ', tarea.completado);
            
            console.log(colors.green("==================="));
        }

        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );

        console.log( actualizado );
        break;
    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        if (borrado)
            console.log('Registro borrado');
        else
            console.log('No se encontró la tarea inidcada');

        break;
    default:
        console.log('Comando no reconocido');
        break;
}

