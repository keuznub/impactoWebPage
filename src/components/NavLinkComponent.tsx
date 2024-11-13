import { Link } from "react-router-dom"

const NavLinkComponent = ({path,text, className, isIcon, img}:{path:string, text:string, className?:string, isIcon?:boolean, img?:string})=>{

let LinkAux = ()=>(isIcon)?<Link to={path}><img className="object-cover w-10 h-10 rounded-full" src={img} alt="icon"/></Link>:<Link to={path}>{text}</Link>

return <>
    <li className={"p-2 group cursor-pointer font-bold hover:px-6 transition-all duration-300"+ className }><LinkAux/>
    <br />
    <div className="justify-self-center border-transparent  border invisible opacity-0 border-b-zinc-300 w-0 group-hover:visible group-hover:w-full group-hover:opacity-100 transition-all ease-out duration-300 delay-150"/>
    </li>
</>
}


export default NavLinkComponent