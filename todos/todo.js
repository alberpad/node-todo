const fs = require('fs');

let listadoTodo = [];

// let db = fs.readFile('./db/todosdb.json', (err, data) => {
//   if (err) throw new Error('No se puede acceder a la base de datos');
//   else listadoTodo = data;
// });

const cargarDB = () => {
  try {
    listadoTodo = require('../db/todosdb.json');
    console.log('DB cargada');
  } catch (error) {
    listadoTodo = [];
    console.log('DB error');
  }
};

const guardarDB = () => {
  let data = JSON.stringify(listadoTodo);
  fs.writeFile('./db/todosdb.json', data, (err) => {
    if (err) throw new Error('Error al guardar en la base de datos');
  });
  console.log('DB Guardada');
};

const crear = (descripcion) => {
  cargarDB();
  let todo = {
    descripcion,
    completado: false
  };
  listadoTodo.push(todo);
  guardarDB();
  return todo;
};
const getListado = () => {
  cargarDB();
  return listadoTodo;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  console.log(listadoTodo);
  console.log(descripcion);
  let index = listadoTodo.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  console.log(index);
  if (index >= 0) {
    listadoTodo[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();
  console.log(descripcion);
  // SEGUN CURSO NODE
  // let nuevoListado = listadoTodo.filter((tarea) => {
  //   return tarea.descripcion != descripcion;
  // });
  // if (listadoTodo.length === nuevoListado.length) {
  //   return false;
  // } else {
  //   listadoTodo = nuevoListado;
  //   guardarDB();
  //   return true;
  // }
  // .SEGUN CURSO NODE
  let index = listadoTodo.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listadoTodo.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
