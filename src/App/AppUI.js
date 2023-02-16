import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
})  {

    return(
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
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton href="#" style="--clr:#ff22bb;--i;2;"><span>Button</span></CreateTodoButton>
      </React.Fragment>
    );
}

export {AppUI};