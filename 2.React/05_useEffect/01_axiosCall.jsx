// connecting to backend using axios.

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function App()
{
  const [todos,setTodo] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response){
        setTodo(response.data.todos)
      })
  },[])
  return(
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({title,description})
{
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App