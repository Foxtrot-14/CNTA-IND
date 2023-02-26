import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import B from '../assets/2.jpg';

function Contact() {
    return(
        <>
            <Navbar />
            <Hero 
            className="hero-about"
            heroImg={B}
            title="Contact"
            btnClass="hide"
            /> 
        </>
    )
}

export default Contact;