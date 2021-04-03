import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Carousel } from 'react-bootstrap';
import NavigationIcon from 'mdi-react/NavigationIcon';
import projectfont from "assets/images/coding-project.jpeg"
import farmSquare from "assets/images/FarmSquare.png"

const ProjectCards = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image}
          alt={props.alt}
        />
        <Carousel.Caption>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>     
  );
};

export default ProjectCards;