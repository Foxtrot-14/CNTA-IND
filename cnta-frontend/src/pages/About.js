import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import B from '../assets/1.jpg';

function About() {
    return(
        <>
            <Navbar />
            <Hero 
            className="hero-about"
            heroImg={B}
            title="About"
            btnClass="hide"
            /> 
        </>
    )
}

export default About;