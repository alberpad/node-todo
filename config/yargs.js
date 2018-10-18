const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
};
const completado = {
  alias: 'c',
  default: false,
  desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
  .command('crear', 'Crear un elemento ToDo', {
    descripcion
  })
  .command('actualizar', 'Actualiza el estado completado de un ToDo', {
    descripcion,
    completado
  })
  .command('borrar', 'Borrar un ToDo', {
    descripcion
  })
  .help().argv;

module.exports = {
  argv
};
