// 2. Write the program :-
// 1. Create a button on top.
// 2. Create two headers with some title .
// 3. Every time a button is clicked the title of one header will change.
// 4. Important :- Reduce the re-rendering of the components.

import { useState } from "react"


function App(){
  
  return( <>
    <HeaderWithButton></HeaderWithButton>
    <Header></Header>
    </>)
}

function HeaderWithButton(){
  const [value,setvalue] = useState("raman");

  function changeOnButtonClick()
  {
    setvalue(Math.random);
  }

return <div>
<button onClick={changeOnButtonClick}>click me to change the title</button>
<p>my name is {value}</p>
</div>
}

function Header(){
return <><p>my name is raman</p></>
}

export default App  