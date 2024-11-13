import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Raiders from "./pages/Raiders"
import ContactUs from "./pages/ContactUs"
import MainLayout from "./layouts/MainLayout"


const App = () => <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="raiders" element={<Raiders/>}/>
                    <Route path="contactus" element={<ContactUs/>}/>     
                </Route>
            </Routes>
        </BrowserRouter>
</>

export default App