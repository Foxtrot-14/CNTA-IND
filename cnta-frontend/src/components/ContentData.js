import './Content.css'
import {Component} from 'react';

class ContentData extends Component {
    render(){
        return(
            <div className={this.props.className}>
                <div className="con-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img1" /> { /*add image over here*/}
                    <img src={this.props.img2} alt="img2" /> { /*add image over here*/}
                </div>
            </div>
        )
    }
}

export default ContentData;