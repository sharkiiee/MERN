import axios from "axios";
import { useEffect, useState } from "react";

function App()
{

  const [buttonValue, setbuttonValue] = useState(1);

    function buttonHandler(value)
    {
      setbuttonValue(value);
    }
  return(
    <>
    <button onClick={()=> buttonHandler(1)}>1</button>
    <button onClick={()=> buttonHandler(2)}>2</button>
    <button onClick={()=> buttonHandler(3)}>3</button>
    <button onClick={()=> buttonHandler(4)}>4</button>
    <Todo id={buttonValue}></Todo>
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
    },[id])

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
