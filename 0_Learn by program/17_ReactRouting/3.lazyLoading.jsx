// Lazy loading 
// Something asyncronouse component fetching is working that's why use suspence.

// Always make exported files default.

// Write a program that shows lazy loading of the page.

import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Suspense, lazy } from 'react';
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App()
{

    return (
        <div>
        <BrowserRouter>
        <Appbar/>
            <Routes>
                <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
                <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
            </Routes>        
        </BrowserRouter>
        </div>
        
    )
}

function Appbar()
{
    const navigate = useNavigate();
    return <div>
                <button onClick={()=> {
                    navigate("/");  
                }}>Landing Button</button>
                <button onClick={()=> {
                    navigate("/dashboard"); 
                }}>Dashboard Button</button>
        </div>
}

export default App;