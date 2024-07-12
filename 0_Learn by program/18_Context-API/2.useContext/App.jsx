// Context API
// Context api has two parts :- 
//  1. Define context api in some other file and wrap anyone who want to use the teleported value.
import { useContext, useState } from "react"
import { CountContext } from "./context";

function App()
{
    const [count,setCount] = useState(0);

    return(
        <div>
            <CountContext.Provider value={{count , setCount}}>
                <Count></Count>   
            </CountContext.Provider>
        </div>
    )
}



function Count()
{
    return <div>
        <CountRenderer/>
        <Buttons></Buttons>
    </div>
}

function CountRenderer()
{
    const {count} = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons()
{
    const {count,setCount} = useContext(CountContext);

    return <div>
        <button onClick={() =>{
            setCount(count + 1);
        }}>Increase</button>
        <button onClick={() =>{
            setCount(count - 1);
        }}>Decrease</button>
    </div>
}

export default App