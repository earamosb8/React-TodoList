import React from "react";
import './TodoItem.css';
import { GoTrashcan } from "react-icons/go";
import { FcOk,FcFullTrash } from "react-icons/fc";



function TodoItem (props){

   

    
    return(
        <li className="TodoItem">
            {/* si props.completed es verdadero aplica la otra clase*/}
             {/* debo usar arrow function si mi funcion recibe parametros*/}
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onCompleted}>
                <FcOk/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDeleted}>
                <FcFullTrash/>
            </span>
        </li>
    )
};

export default TodoItem;