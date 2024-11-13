import { Link, NavLink } from "react-router-dom"
import NavLinkComponent from "./NavLinkComponent"


const Nav = ()=> <>
    <nav className="border border-transparent border-b-black py-4 mx-24">
        <ul className=" flex justify-around ">
            <NavLinkComponent path="/" text="Icon"/>
            <NavLinkComponent path="/home" text="Home"/>
            <NavLinkComponent path="/raiders" text="Raiders"/>
            <NavLinkComponent path="/contactUs" text="Contact Us"/>
        </ul>
    </nav>
</>

export default Nav