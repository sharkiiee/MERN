// Lazy Loading

// Still some issue please check the issue- the dashboard files are coming with some extra files.
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react';
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App()
{
    return (
        <div>
            <div>
                <button onClick={()=> {
                    window.location.href = "/";
                }}>Landing Button</button>
                <button onClick={()=> {
                    window.location.href = "/dashboard";
                }}>Dashboard Button</button>
            </div>
        <BrowserRouter>
            <Routes>
                <Route path='/dashboard' element={<Suspense fallback={"loading..."}> <Dashboard/> </Suspense>} />
                <Route path='/' element={<Suspense fallback={"loading..."}> <Landing/> </Suspense>} />
            </Routes>        
        </BrowserRouter>
        </div>
        
    )
}

export default App;