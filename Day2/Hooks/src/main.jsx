
import { createRoot } from 'react-dom/client'
import { Counter , TogglePassword , LiveInput , LikedComponent} from './App.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <>
    <App />
    <Counter />
    <TogglePassword/>
    <LiveInput/>
    <LikedComponent/>
 </>
)
