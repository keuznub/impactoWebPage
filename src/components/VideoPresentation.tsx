import { useEffect, useState } from "react"



const VideoPresentation = () =>{
    
    const [y,setY] = useState(0)
    const [y2,setY2] = useState(0)
    
    useEffect(()=>{
        const translateElement =  ()=>{
            setY((-window.scrollY/14))
            setY2((-window.scrollY/8)+50)
        }
        document.addEventListener('scroll', translateElement)

    })

    return<>

        <div className=" overflow-hidden justify-self-center transition-all duration-500 ease-out" style={{transform: `translateY(${y}px)`}}>
            <div className="transition-all duration-500 ease-out" style={{transform: `translateY(${y2}px)`}}>
                <video
                autoPlay
                loop
                muted
                className="scale-150 object-cover w-full h-full">
                    <source src="/videos/sample4K.mp4"/>
                </video>
            </div>
        </div>

        </>
}

export default VideoPresentation