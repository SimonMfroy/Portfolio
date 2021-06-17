import React from 'react';
import { Container } from 'react-bootstrap';
import CardProduct from 'components/CardProduct';

import Thp from "assets/images/thp.png"
import ThreeWa from "assets/images/3wa.png"
import Adjutor from "assets/images/adjutor.png"

const Education = () => {
  return (
    <section id="education" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Education</h3>
      <Container>
        <CardProduct title="The Hacking Project" description="Developpeur Web " strong="ReactJs / Ruby on Rails" location="Lyon (69)" date="2020-2021" img={Thp} link="https://www.thehackingproject.org/" />
        <CardProduct title="3w Academy" description="Developpeur Web " strong="JS / PHP" location="Lyon (69)" date="2019" img={ThreeWa} link="https://3wa.fr/"/>
      </Container>
    </section>
  );
};

export default Education;
