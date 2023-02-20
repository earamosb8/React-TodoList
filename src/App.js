
import './App.css';
import React from 'react';
import TodoCounter from './TodoCounter/TodoCounter';
import TodoSearch from './TodoSearch/TodoSearch';
import TodoList from  './TodoList/TodoList';
import TodoItem from './TodoItem/TodoItem';
import CreateTodoButton from './CreateTodoButton/CreateTodoButton';
import { Modal } from './Modal/Modal';
import TodoForm from './TodoForm.js/TodoForm';



/*const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true,posicion:0 },
  { text: 'Tomar el curso de React', completed: false ,posicion:1},
  { text: 'LLorarcon la llorona', completed:true ,posicion:2},
]*/
function App() {
//almacenando en el localStorage del navegador
const localStorageTodos = localStorage.getItem('TODOS_V1');
let parsedTodos;

//!= si es null ,undefined,vacio, no existe, false
//JSON.stringify convierte un array u objeto a un string
if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos =[];
} else {
  parsedTodos = JSON.parse(localStorageTodos)
}


    //cada vez que utilizamos setState se va a volver a 
//nuestro componente
  const[todos, setTodos] = React.useState(parsedTodos);
  const [openModal, setOpenModal] = React.useState(false);
  const[searchValue,setSearchValue] = React.useState('');
  //creamos uan variable que tenga la cantidad de tareas completadas
  const completedTodos = todos.filter(todo => todo.completed == true).length;
  //total de todos
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length < 1){
      searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    
  }

  const saveTodos = (newTodos) => {
    const stringiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) =>{
    //buscamos los indice de cada elemento del array que sea igual al texto digitado por el usuario
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }


  const deleteTodos = (text) =>{
    //buscamos los indice de cada elemento del array que sea igual al texto digitado por el usuario
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }


  const addTodo = (text) =>{
    const newTodos = [...todos];
    console.log("siesta llegando "+ text)
    newTodos.push({
      completed:false,
      text: text,
    })
    const stringiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringiedTodos);
    setTodos(newTodos);
  }
  //cuando declaro un useeffect se ejutara cada vez que se reenderice el componente
  React.useEffect(() =>{
    console.log('useEfect');
  })


  //cuando declaro un useeffect se ejecutara solo 1 vez
  React.useEffect(() =>{
    console.log('useEfect2 que se ejecuta 1 vez');
  },[])

  //cuando declaro un useeffect se ejecutara solo 1 vez
  React.useEffect(() =>{
    console.log('useEfect2 cuando cambia un estado');
  },[totalTodos])
//renderiza solo si el elemento tiene algo
 {/* <p>{searchedTodos[0]?.text}</p>*/}
  return (
    <React.Fragment>
        
         <TodoCounter
              total={totalTodos}
              completed={completedTodos}/>
          <TodoSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}/>
          <TodoList>
                {searchedTodos.map(todo =>(
                  //utilizamos Key para evitar renders innecesarios
                  <TodoItem key={todo.posicion} text={todo.text} completed={(todo.completed)}
                  onCompleted={() => completeTodo(todo.text)}
                  onDeleted={()=>deleteTodos(todo.text)}/>
            ))}
          </TodoList>
          <CreateTodoButton setOpenModal={setOpenModal}/>
          {openModal && (
          <Modal>
                
                  <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
                  <TodoForm  addTodo={addTodo} setOpenModal={setOpenModal}/>
                  
           </Modal>  )} 
            
     {/*   <CreateTodoButton/> */}
    </React.Fragment>
   

  );
}

export default App;
