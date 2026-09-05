
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
//import Clock from './Clock.jsx'
//import Fetching from './Fetching.jsx'
import Quotes from './Quotes.jsx'

createRoot(document.getElementById('root')).render(
<>
    <App />
    {/*<Clock/>*/}
    {/*<Fetching/>*/}
    <Quotes/>
</>
  
)
