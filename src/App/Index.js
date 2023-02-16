
import React from 'react';
import { ReactDOM } from 'react';
import { AppUI } from './AppUI';
//import './index.css';

//const dafaultTodos = [
//  { text: 'Aprender HTML', completed: true },
//  { text: 'Aprender CSS', completed: false },
//  { text: 'Aprender JS', completed: false },
// { text: 'Tomar el curso de intro a React', completed: true },
// { text: 'Certificarse en React', completed: false },
//];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos; // para los nuevos usuarios

  if(!localStorageTodos){ // if !en el caso que el usuario no tenga ninguna informacion almacenada, el se para lo contrario
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

// filtro de busqueda de TODOs linea 26 al 35, para que aparezcan en el input (todoSearch)
  let searchedTodos = []; 

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
   searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
   })
  }

  //logica para guardar estados y en localStorage
const saveTodos = (newTodos) => {
  const stringifiedTodos = JSON.stringify(newTodos);
  localStorage.setItem('TODOS_V1', stringifiedTodos);
  setTodos(newTodos);
};

  // filtro de busqueda de TODOs linea 26 al 35
    const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);// se examina cual tiene el mismo texto y obtendremos la posicion

    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);// se examina cual tiene el mismo texto y obtendremos la posicion

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
