
import React, { useState } from 'react';
import './App.css';

function App() {


  const [tasks, setTasks] = useState([])

  const handlePost = e => {
    setTasks("");
  }

  const handleChange = (event) =>{
    setTasks(event.target.value)
  }

  // const todos = tasks.map((todo, index) => {
  //   return (
  //     <li key={index}>{todo}</li>
  //   )
  // })


  return (
    
      <div className="container">
        <h1 className="title">todos</h1>  
          <ul className="listItemClass">
            <input type="text" onChange={handleChange} value={tasks} placeholder="What needs to be done?" />
            <button type="button" className="btn" onClick={handlePost}><i class="fas fa-plus-circle"></i></button>
           <li>sda</li>
          </ul>
          <div className="footer">
            <small>x items left</small>
          </div>   
      </div>
    
  );
}

export default App;
