import './Hero.css';

function Hero(props) {
    return(
    <>
        <div className={props.className}>
            <img src={props.heroImg} alt={props.heroImg} />
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.buttonText} {/* Link with Login/Signup */}
            </a> 
        </div>
    </>
    )
}

export default Hero;