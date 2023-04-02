import React from "react";
import "./Cards.css";
import IMG1 from "../assets/UMRAZ -CSE.png";
// import IMG2 from "../assets/Img2.jpg"
// import IMG3 from "../assets/Img3.jpg"
// import IMG4 from "../assets/Img4.jpg"
// import IMG5 from "../assets/Img5.jpg"
// import IMG6 from "../assets/Img6.jpg"
// import IMG7 from "../assets/Img7.jpg"
// import IMG8 from "../assets/Img8.jpg"

function Cards() {
  const Data = [
    {
      id: 1,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 2,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 3,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 4,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 5,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 6,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 7,
      name: "Umraz Khan",
      image: IMG1,
    },
    {
      id: 8,
      name: "Umraz Khan",
      image: IMG1,
    },
  ];

  return (
    <div className="container portfolio__container">
      {Data.map(({ id, name, image }) => {
        return (
          <div key ={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <div className="portfolio__item-cta">
              <button href="https://www.google.com">View</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
