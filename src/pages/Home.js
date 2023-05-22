import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import A from '../assets/hero.svg';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive'

function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return(
        <>
            <Navbar />
            {/* <Hero 
            className="hero"
            heroImg={A}
            title="Child Nutrition Tracking App"
            text="Our solution to detect malnourishment in kids"
            buttonText="Get Started"	 
            url="/signup"
            btnClass="show"
            /> */}

            <div className={`w-full flex ${isMobile && 'flex-col-reverse'} items-center pt-24`}>

                <div className={`${isMobile ? 'w-full' : 'w-1/2'} px-2`}>
                    <h1 className={`${isMobile ? 'text-3xl mt-2' : 'text-5xl'} font-bold text-cyan-500`}>Child Nutrition Tracking App</h1>
                    <p className={`${isMobile ? 'text-lg mt-2' : 'text-2xl mt-5'}  `}>FC-37 Solution for Malnourishment in kids</p>
                </div>

                <div className={`${isMobile ? 'w-full' : 'w-1/2'} px-2`}>
                    <img className='' src={A} />
                </div>
                

            </div>
            <Content />
            <Footer />
        </>
    )
}

export default Home;