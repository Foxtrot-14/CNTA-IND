import "./Content.css";
import { Component } from "react";

class ContentData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="con-text">
          <h2 className="text-xl font-bold">{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="img1" />
          <img src={this.props.img2} alt="img2" />
        </div>
      </div>
    );
  }
}

export default ContentData;
