import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import B from '../assets/1.jpg';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';


function About() {
    return(
        <>
            <Navbar />
            <Hero 
            className="hero"
            heroImg={B}
            title="About"
            btnClass="hide"
            />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About;