import AboutUsCard from "../components/AboutUsCard"
import ButtonContactUs from "../components/ButtonContactUs"
import VideoPresentation from "../components/VideoPresentation"


const Home = () => <>
    <div className="container flex flex-col gap-y-44 first:mt-36 last:my-36">
    <section className="">
        <AboutUsCard/>
    </section>

    <section className="">
        <VideoPresentation/>
    </section>

    <section className="flex flex-col justify-items-center ">
        <ButtonContactUs/>
    </section>
   
    </div>
</>


export default Home