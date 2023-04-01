import "./AfterLoginNavbar.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

class AfterLoginNavbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="items">
        <h1 className="logo">CNTA</h1>

        <div className="icons" onClick={this.handleClick}>
          {this.state.clicked ? <RxCross2 /> : <AiOutlineMenu />}
        </div>

        <ul className={this.state.clicked ? "menu active" : "menu"}>
          <Link to="/welcome" className="links">
            Home
          </Link>
          <Link to="/addprofile" className="links">
            Add Profile
          </Link>
          <Link to="/viewprofile" className="links">
            View Profile
          </Link>
          {/* <Link to="/store" className="links">
            Store
          </Link> */}
          <Link to="/login">
            <button>Log Out</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default AfterLoginNavbar;
