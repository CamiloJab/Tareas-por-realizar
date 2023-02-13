
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Aprender HTML', completed: false },
  { text: 'Aprender CSS', completed: false },
  { text: 'Aprender JS', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Certificarse en React', completed: false },
];

function App() {
  return (
    <React.Fragment> {/*React necesita una etiqueta que contenga todo, para eso se usa React.Fragment, no repercute en en el codigo en general*/}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
