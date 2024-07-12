// Write the program for the prop Drilling

import { useState } from "react"

function App()
{
    const [count,setCount] = useState(0);

    return(
        <div>
            <Count count={count} setCount={setCount}></Count>
        </div>
    )
}

// This is called pro-drilling that even Count component isn't the who needs setCount but still we are passing for the Buttons component i.e for its child.

function Count({count, setCount})
{
    return <div>
        {count}
        <Buttons count={count} setCount={setCount}></Buttons>
    </div>
}

function Buttons({count, setCount})
{
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