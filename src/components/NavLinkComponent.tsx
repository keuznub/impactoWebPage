import { Link } from "react-router-dom"

const NavLinkComponent = ({path,text}:{path:string, text:string})=><>
    <li className="p-2 group cursor-pointer"><Link to={path}>{text}</Link>
    <br />
    <div className="justify-self-center border-transparent border invisible opacity-0 border-b-black w-0 group-hover:visible group-hover:w-full group-hover:opacity-100 transition-all ease-out duration-700 delay-150"/>
    </li>
</>


export default NavLinkComponent