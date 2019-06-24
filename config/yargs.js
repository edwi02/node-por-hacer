
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer [ToDo]'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento tarea - por hacer [ToDo].',{
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea.', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'

        }
    })
    .command('borrar', 'Eliminar una  tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}


