import './LoginForm.css';
import { Link } from "react-router-dom";

function LoginForm(){
    return(
        <div className="login-form">
            <h1>Welcome!</h1>
            <h3>We hope you are having a good day</h3>
            <form>
                <input placeholder="Phone Number" />
                <input placeholder="Password" />
                <Link to="/welcome">
                    <button id="form-btn">Log In</button>
                </Link>
                <button>Don't have an account? Sign Up</button>
            </form>
        </div>
    )
}

export default LoginForm