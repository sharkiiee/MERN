    // **Program:-**
// If I ask you to create an app that does two things -
// 1. Increases a counter by 1 
// 2. Lets user put a value in an input box (n) and you need to show sum from 1-n 
// 3. One restriction - everything needs to be inside App

import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react"

function App()
{ 
    const [inputValue,setInputValue] = useState(1);
    const [counter,setCounter] = useState(0);
    // const [finalValue,setFinalCount] = useState(0);

    let count = useMemo(()=>{
        console.log("re-rendering")
        let finalCount = 0;
        for(let i=0; i<=inputValue; i++)
            {
                finalCount = finalCount + i;
            }
            return finalCount
    },[inputValue])

    //Performing same rendering operation using useEffect.

    // useEffect(()=>{
    //     console.log("re-rendering")
    //     for(let i = 0;i <= inputValue; i++)
    //         {
    //             let count = 0;
    //             for(let i=0; i<=inputValue; i++)
    //                 {
    //                     count = count + i;
    //                 }
    //                 setFinalCount(count);
    //         }
    // },[inputValue])

    return <div>
        <input type="text" onChange={(e)=>{
            setInputValue(e.target.value);
        }} placeholder={"Find sum from 1 to n"} />
        <br />
        sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={()=>{
            setCounter(counter + 1);
        }}>Counter {counter} </button>
    </div>
}

export default App