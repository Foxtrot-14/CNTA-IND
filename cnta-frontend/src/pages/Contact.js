import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import B from '../assets/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
    return(
        <>
            <Navbar />
            <Hero 
            className="hero"
            heroImg={B}
            title="Contact"
            btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;