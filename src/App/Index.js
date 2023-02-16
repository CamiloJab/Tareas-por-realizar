
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

// nuestro custom hook sobre localstorage
function useLocalStorage (itemName, initialValue){

  //logica para localstorage 
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem; // para los nuevos usuarios


  if(!localStorageItem){ // if !en el caso que el usuario no tenga ninguna informacion almacenada, el se para lo contrario
    localStorage.setItem(itemName, JSON.stringify([initialValue]));
    parsedItem = [initialValue];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  //logica para guardar estados y en localStorage
  const saveItem = (newItem) => {
  const stringifiedItem = JSON.stringify(newItem);

  localStorage.setItem(itemName, stringifiedItem);
  setItem(newItem);
  };

    return [
      item,
      saveItem,
    ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
