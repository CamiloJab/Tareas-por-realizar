import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
const onSearchValueChange = (event) => {
  console.log(event);
}

  return (
    <input 
    className="TodoSearch" 
    placeholder="Agrega tus tareas" 
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
