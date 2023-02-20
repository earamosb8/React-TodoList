import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}){
   // console.log("todos completados " +completed)
   // const filtrarCompletado = completed.filter(completed => completed === true);
    //console.log(filtrarCompletado);
    
    return(
        <React.Fragment>
            <h1 className="TodoTitle">Mi lista de tareas</h1>
            {total==true && <h2 className="TodoCounter">Has completado {completed}  de {total} todos</h2>}
        </React.Fragment>
       
        /*usando props como parametro:*/
       /*} <h2 className="TodoCounter">{`Has completado ${props.completed} de ${props.total} todos`}</h2>*/
    );
}


export default TodoCounter;
//permite la importacion desde otro archivo conel nombre que quermos

//export { TodoCounter};
//permite la importacion solo con el solo el nombre que se define entre los corchetes

//pero entondes deberia importarlo asi import {TodoCounter} from './TodoCounter';