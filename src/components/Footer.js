import "./Footer.css";
import { ImFacebook2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1 className="text-2xl font-bold">CNTA</h1>
          <p>Nutrition Matters: Building Stronger Bodies, Brighter Futures</p>
        </div>
        <div className="flex">
          <a href="/#">
            <ImFacebook2 className="i" />
          </a>
          <a href="/#">
            <FiInstagram className="i" />
          </a>
          <a href="/#">
            <BsTwitter className="i" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <a href="/#">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;