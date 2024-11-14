import { useEffect, useState } from "react"



const AboutUsCard = () => {
    let [x,setX] = useState(0)
    let [y,setY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setX(window.scrollY/8); 
            setY(-window.scrollY/8); 
        };
        document.addEventListener('scroll', handleScroll);
    }, []);
    

    return <>
        <article className={`rounded-md p-4 w-10/12 transition-all duration-500 ease-out `} style={{transform: `translateX(${x}px) translateY(${y}px)`}}>
            <header className="text-2xl md:text-7xl scroll-m-6">
                About Us
            </header>
            <main className="md:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus voluptas eos in atque, harum nisi voluptates perspiciatis molestiae perferendis aut repudiandae esse explicabo quasi blanditiis, nesciunt labore qui? Assumenda?
                Optio adipisci assumenda voluptatum aliquid, ipsum in. Modi labore atque voluptates nesciunt provident dolorum deleniti adipisci et, tenetur illum quo sint optio quod ratione alias fugit quaerat a? Dolores, voluptas.
                Impedit incidunt velit error ipsam alias sunt dolore, porro labore eius vitae officiis architecto odit ratione. Ad laboriosam omnis obcaecati corrupti eos, at magni, facilis cumque alias qui fugiat vel!
            </main>
        </article>

    </>
}

export default AboutUsCard