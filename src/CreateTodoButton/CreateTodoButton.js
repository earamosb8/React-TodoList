import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = (openModal) =>{
      console.log(openModal);
        props.setOpenModal(prevState => !prevState)//funcion que nos permite acceder al estado anterior funciona en todos los estados en este caso me permite abrir o cerrar le modal
        
      
        
    }
  return (
    /*se debe envolver la funcion en una arrow function, de lo contrario se ejecutara apenas se reenderice el componente*/
    <button className="CreateTodoButton"
    
     onClick={() =>{onClickButton(props.openModal)}}>+</button>
  );
}

export default CreateTodoButton;