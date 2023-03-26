import { Component } from "react";
import { Link } from "react-router-dom";
import "./AfterLoginNavbar.css";
import { AiOutlineProfile, AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {CiViewBoard} from "react-icons/ci";
import {FaStore} from "react-icons/fa";

class AfterLoginNavbar extends Component {
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
          <Link to="/addprofile" className="nav-links"><AiOutlineProfile className="nav-icons"/>Add Profile</Link>
          <Link to="/welcome" className="nav-links"><CiViewBoard className="nav-icons"/>View Profiles</Link>
          <Link to="/store" className="nav-links"><FaStore className="nav-icons"/>Store</Link>
        </ul>
      </nav>
    );
  }
}

export default AfterLoginNavbar;