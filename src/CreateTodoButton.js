import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    alert('Aqui deberia ir un modal');
  };

  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >
      
      Añadir tarea
    
    </button>

  );
}

export { CreateTodoButton };
