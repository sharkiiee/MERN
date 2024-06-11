// Create a simple todo applicaiton displaying 2 todos
// constraints are title, description,

import { useState } from "react";

function App()
{
    const [todo, setTodos] = useState([{
        title: "Going to the gym",
        description:"Doing push-ups"
    },{
        title: "Going to the gym",
        description:"Doing back workout"
    },{
        title: "Going to the gym",
        description:"Doing legs workout"
    },])
    return(
        <div>
            {/* ugly way */}
            {/* <Todo title = {todo[0].title} description= {todo[0].description}></Todo>
            <Todo title = {todo[1].title} description= {todo[1].description}></Todo>
            <Todo title = {todo[2].title} description= {todo[2].description}></Todo> */}

            {/* better way */}
            {todo.map(function(todo){
                return <Todo title={todo.title} description= {todo.description}></Todo>
            })}
        </div>
    )
}


function Todo(props) {
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  }
  
export default App;
