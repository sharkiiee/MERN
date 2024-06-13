// defining key for different element as id.

import { useState } from "react";
import { memo } from "react";

let globalCounter = 4;

function App()
{
  const [todos,setTodos] = useState([
    {
    id:1,
    title:"Day 1",
    description:"chest day"
  },{
    id:2,
    title:"Day 2",
    description:"Back day"
  },{
    id:3,
    title:"Day 3",
    description:"legs day"
  },])

  function addTodo()
  {
    setTodos([...todos,{
      id: globalCounter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return(
    <div>
      <button onClick={addTodo}>click to add new todo</button>
      {/* defining key  --> key={todo.id} */}
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>

  )
}

function Todo(props)
{
  return <>
    <h1>{props.title}</h1>
    <h5>{props.description}</h5>
  </>
}

export default App