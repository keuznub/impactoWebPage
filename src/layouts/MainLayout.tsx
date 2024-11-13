import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = ()=><>
    <main className="bg-red-400 min-h-screen">
        <Header/>
        <Outlet/>
        <Footer/>
    </main>

</>

export default MainLayout