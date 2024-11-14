
import IconComponent from "./IconComponent"
import NavLinkComponent from "./NavLinkComponent"

const Nav = ()=> <>
    <nav className="grid grid-cols-2 border border-transparent border-b-zinc-300 py-4 text-white font-sans max-h-20">
            <IconComponent path="/images/Impacto.jpg" className="object-cover w-20 h-20 transition-all duration-300 rounded-full  justify-self-start ml-10"/>
            <ul className="flex justify-self-end md:gap-x-20 text-nowrap">
                <NavLinkComponent path="/home" text="Home"/>
                <NavLinkComponent path="/raiders" text="Raiders"/>
                <NavLinkComponent path="/contactUs" text="Contact Us"/>
            </ul>
    </nav>
</>

export default Nav

//  