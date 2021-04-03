import React from 'react';
import ProjectCards from 'components/ProjectCards';
import { Container, Row, Col } from 'react-bootstrap';
import farmSquare from "assets/images/farmsquareHome.png"
import progame from "assets/images/progame.png"
import telephoneose from "assets/images/telephoneHome.png"
import telephoneoseVid from 'assets/videos/telephone.mp4'
import progameVid from 'assets/videos/progame.movie.mp4'
import farmsquareVid from 'assets/videos/FarmSquareMovie.mp4'

const Projects = () => {

   return (
    <section id="projects" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Projects</h3>
      <Container className="mt-5">
        <Row>
          <Col>
            <ProjectCards
              title="Farm Square"
              list1="Ruby on Rails"
              list2="ReactJS"
              list3="html/css"
              list4="Github"
              content="Application pour organisation de tâches à effectuer par des membres"
              backTitle="Application créée pour une association"
              video={farmsquareVid}
              image={farmSquare}
            />
          </Col>
          <Col>
            <ProjectCards
              title="Le Telephone Ose"
              list1="Ruby on Rails"
              list2="Javascript"
              list3="PostgreSql"
              list4="Heroku"
              content="Offrez-vous votre chanson préféré chanté au téléphone par un artiste, pour un moment unique et plein d'émotions."
              backTitle="Projet de fin de session (fullstack) à THP "
              video={telephoneoseVid}
              image={telephoneose}
            />
          </Col>
          <Col>
            <ProjectCards
              title="ProGame"
              content="Un projet pour apprendre la gestion d'API en JS"
              backTitle="Une simple application de recherches de jeux-vidéos réalisée en 3 jours"
              video={progameVid}
              image={progame}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
