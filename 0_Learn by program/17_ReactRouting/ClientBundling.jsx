// Make two buttons and everytime you click on the button it will take you to the new page.
// showing Client side Bundling. -- i.e. Performing hard reload of the page.

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

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
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/' element={<Landing />} />
            </Routes>        
        </BrowserRouter>
        </div>
        
    )
}

export default App;