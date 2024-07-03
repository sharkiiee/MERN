import { useRef } from "react";
import { useEffect } from "react";

function App()
{
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(() => {
            divRef.current.innerHTML = "10"
        }, 5000);
    },[])

    const incomeTax = 20000;

    return (
        <div>
            hii there, your income tax return are <div ref={divRef}>{incomeTax}</div>
        </div>
    )
}

export default App;