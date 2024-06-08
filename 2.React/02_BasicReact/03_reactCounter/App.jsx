
import { useState } from "react";


//  // Unstructured react code.
// function App() {

//   const [count, setCount] = useState(0);

//   function onClickHandler()
//   {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </>
//   )
// }



// Better syntax
function App(){
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomButton count = {count} setCount={setCount}></CustomButton>
    </>
  )
}

// Component

function CustomButton(props)
{
  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}


export default App
