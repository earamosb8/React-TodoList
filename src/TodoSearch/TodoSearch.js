import React from "react";
import './TodoSearch.css';


function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    return (
        <React.Fragment>
                <input
            onChange={
                onSearchValueChange
             } 
             className="TodoSearch" placeholder='Buscar Tarea' value={searchValue}/>
        


        </React.Fragment>
            
    )
}

export default TodoSearch;