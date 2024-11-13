
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <div className=' bg-gradient-to-b  to-[#000000] from-[#232323] px-4 md:px-24 text-zinc-300'> 
        <App />
    </div>
)
