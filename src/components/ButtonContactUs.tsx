import { useEffect, useState } from "react"



const ButtonContactUs = () =>{
    
    const [y,setY] = useState(0)
    
    useEffect(()=>{
        const translateElement =  ()=>{
            setY(-window.scrollY/2)
        }
        document.addEventListener('scroll', translateElement)

    })

    return<>

        <button className="bg-zinc-100 w-52 h-52 shadow-xl shadow-black text-black font-sans font-bold text-xl hover:bg-zinc-200 rounded-full z-10 justify-self-end transition-all duration-500 ease-out" style={{transform: `translateY(${y}px)`}}>
            Contact Us
        </button>

        </>
}

export default ButtonContactUs