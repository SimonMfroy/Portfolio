import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../assets/images/home-bg.jpg'

const About = () => {
  return (
      <section id="about" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text banner-sections">About</h3>
        <div className="container">
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <div className="container flow-text">
              <blockquote>
                <h2>
                  Jeune Développeur fullstack passioné, axé sur la collaboration et conception de Web App !
                </h2>
              </blockquote>
              <p>
                L'informatique a toujours été pour moi une passion avant d'être une profession. C'est avec une reconversion que je me suis naturellement tourné vers ce domaine .
              </p>
              <p>
                En tant que développeur Web, j'aime apporter mon énergie positive dans une équipe. 
                Toujours heureux d'apprendre je sais fournir l'effort nécessaire 
                à l'accomplissement des missions qui me sont proposées.
                Ma soif d'apprendre me permet d'aborder tous les challenges qui s'offrent à moi sereinement et avec plaisir.
                Je serai ravi de faire parti de vos futurs aventures.
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default About;
