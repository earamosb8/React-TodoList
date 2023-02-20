import React from "react";
import './TodoForm.css';

function TodoForm(props) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    //recibimos el evento de la escritura del usuario
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    const onCancel = () =>{
        props.setOpenModal(false);
    }

    const onSubmit = (event) =>{
        //cancelamos el evento por defecto, de recargar la pagina que tiene los formularios
        event.preventDefault();
        if(newTodoValue && newTodoValue.trim().length){
            props.addTodo(newTodoValue);
            props.setOpenModal(false);
        }
        
        
    }
    return(
        <form onSubmit={onSubmit} >
        <label>Escribe tu nuevo To Do</label>
        <textarea
          value = {newTodoValue}
          onChange = {onChange}
          placeholder = "Escribe una nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick = {onCancel}
          >
            Cancelar
          </button>
  
          <button
            className="TodoForm-button TodoForm-button-add"
            type= "submit"
          >
            Añadir
            </button>
        </div>
      </form>
    )
}

export default TodoForm;