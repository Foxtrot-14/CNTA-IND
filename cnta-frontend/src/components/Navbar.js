import { Component } from "react";
import "./Navbar.css";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { RxPerson, RxCross2 } from "react-icons/rx"
import {FiMessageCircle} from "react-icons/fi"
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">CNTA</h1>

        <div className="menu-icons" onClick={ this.handleClick }>
          { this.state.clicked ? <RxCross2 /> : <AiOutlineMenu /> }
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-links"><AiFillHome className="nav-icons"/>Home</Link>
          <Link to="/about" className="nav-links"><RxPerson className="nav-icons"/>About Us</Link>
          <Link to="/contact" className="nav-links"><FiMessageCircle className="nav-icons"/>Contact Us</Link>
          <button>Log In</button>
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
