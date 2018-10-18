const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todos/todo');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = todo.crear(argv.descripcion);
    console.log(todo);
    break;
  case 'listar':
    let listado = todo.getListado();
    console.log(listado);
    console.log('======================================'.green);
    console.log('=============== ToDos ================'.green);
    for (let tarea of listado) {
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
    }
    console.log('======================================'.green);

    break;
  case 'actualizar':
    let actualizado = todo.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = todo.borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log(`No se reconoce el comando ${comando}`);
}
