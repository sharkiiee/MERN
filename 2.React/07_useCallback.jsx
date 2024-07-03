// Write a program that shows the usage of useCallback :-
// define a function and show that even when the parent is changing due to counter button the function will not work untill it met certain condition.
// condition is when child component button is clicked only then function will work.

import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

function App()
{
  const [counter,setCounter] = useState(0);

  const inputFunction = useCallback(()=>{
  {
    console.log("function rendering");
  }
 },[])

  return <div>
    <button onClick={()=>{
      setCounter(counter + 1);
    }}>Counter {counter}</button>
    <br />
    <Reader value={inputFunction}></Reader>
  </div>
}

const Reader = memo(({value})=>{
  console.log("child render");
  return <>
  <button onClick={value}>Click to render on console</button>
  </>
})

export default App