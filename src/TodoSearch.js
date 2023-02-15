import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
const [searchValue, setSearchValue] = React.useState('');

const onSearchValueChange = (event) => {
  console.log(event);
  setSearchValue(event.target.value);
}

  return [
    <input 
    className="TodoSearch" 
    placeholder="Agrega tus tareas" 
    value={searchValue}
    onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
