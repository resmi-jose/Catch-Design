import React from "react";
import "../Scss/index.scss";
import { Link } from "react-router-dom";
const Card = ({ title, description, image, link }) => {
  const cardsData = [
    {
      image: "image-section1",
      title: "Pink & Purple Sunset",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.",
      link: "Go to the sunset",
    },
    {
      image: "image-section2",
      title: "Blue & Green Ocean",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.",
      link: "View some more",
    },
  ];
  return (
    <div className="row">
      {cardsData.map((cardData, index) => (
        <div key={index} className="col">
          <div className="card">
            <div className={`image-section ${cardData.image}`}></div>
            <div className="content-section">
              <h2>{cardData.title}</h2>
              <p>
                {cardData.description} <br />
                <Link>{cardData.link}</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
