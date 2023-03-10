import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import A from '../assets/3.jpg';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Home() {
    return(
        <>
            <Navbar />
            <Hero 
            className="hero"
            heroImg={A}
            title="Lorem ipsum dolor sit amet."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            buttonText="Get Started"
            url="/"
            btnClass="show"
            />
            <Content />
            <Footer />
        </>
    )
}

export default Home;