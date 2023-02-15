
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const dafaultTodos = [
  { text: 'Aprender HTML', completed: true },
  { text: 'Aprender CSS', completed: false },
  { text: 'Aprender JS', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Certificarse en React', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(dafaultTodos);
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
    const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);// se examina cual tiene el mismo texto y obtendremos la posicion

    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos);
  };

  return (
    <React.Fragment> {/*React necesita una etiqueta que contenga todo, para eso se usa React.Fragment, no repercute en en el codigo en general*/}
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton href="#" style="--clr:#ff22bb;--i;2;"><span>Button</span></CreateTodoButton>
    </React.Fragment>
  );
}

export default App;
