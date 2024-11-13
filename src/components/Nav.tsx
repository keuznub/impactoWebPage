import NavLinkComponent from "./NavLinkComponent"

const Nav = ()=> <>
    <nav className="grid grid-cols-2 border border-transparent border-b-zinc-300 py-4 text-white font-sans">
            <NavLinkComponent path="/" text="Icon" img="/images/Impacto.jpg" isIcon className="justify-self-start"/>    
            <ul className="flex justify-self-end md:gap-x-20 text-nowrap">
                <NavLinkComponent path="/home" text="Home"/>
                <NavLinkComponent path="/raiders" text="Raiders"/>
                <NavLinkComponent path="/contactUs" text="Contact Us"/>
            </ul>
    </nav>
</>

export default Nav

//  