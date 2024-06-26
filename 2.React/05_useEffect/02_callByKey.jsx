//  Write a component that takes a todo id as an input And fetches the data for that todo from the given endpoint And then renders it.


import axios from "axios";
import { useEffect, useState } from "react";

function App()
{
  return(
    <>
    <Todo id={1}></Todo>
    </>
  )
}

function Todo({id})
{
  const [todo,setTodo] = useState({});
   
  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response =>{
      response.json()
      .then(jsonData =>{
        setTodo(jsonData.todo)
      })
      })
    },[])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
