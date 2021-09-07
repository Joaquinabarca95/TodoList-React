
import React, { useState } from 'react';
import './App.css';

function App() {


  const [todo, setTodo] = useState([])

  const todoList = todo.map((todo, index) =>{
    return (
      <li key={index}>
        {todo} 
        <button  onClick={() => removeTodo(index)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    )
  })


  const handlePost = e => {
    if (e.keyCode === 13 && e.target.value !== ""){
      let task = todo.concat(e.target.value)
      setTodo(task)
      e.target.value = "";
    }
  }

  const removeTodo = (i) => {
    let newTodo = [...todo]
    newTodo.splice(i, 1)
    setTodo(newTodo)
  }

  const itemsLeft = () => {
    if (todo.length === 0){
      return "No task left to do, add a task!"
    } else if (todo.length === 1){
      return "1 task left to do"
    } else if (todo.length > 1){
      return `${todo.length} tasks to do`
    }
  }

 

  return (
    
      <div className="container">
        <h1 className="title">todos</h1>  
          <ul className="listItemClass">
            <input type="text" onKeyUp={handlePost} placeholder="What needs to be done?"  />
           {todoList}
          </ul>
          <div className="footer">
            <small>{itemsLeft()}</small>
          </div>   
      </div>
    
  );
}

export default App;
