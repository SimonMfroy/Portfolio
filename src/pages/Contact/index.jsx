import React from 'react';
import { Card, Container } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin, mdiGithub } from '@mdi/js';

const Contact = () => {
  return (
    <section id="contact" className="section scrollspy full-height" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text teal banner-sections">Contact</h3>
        <Container className="mt-5">
          <Card>
            <Card.Body>
              <p>
                <Icon color="#008073" path={mdiEmail} size={1} />
                <a aria-label="Email Simon" href="mailto:mainfroy.simon@gmail.com" className="hoverline"> mainfroy.simon@gmail.com </a>
              </p>
              <p>
                <Icon color="#008073" path={mdiGithub} size={1} />
                <a aria-label="Simon on Github" href="http://github.com/simonmfroy" className="hoverline"> github.com/simonmfroy</a>
              </p>
              <p>
                <Icon color="#008073" path={mdiLinkedin} size={1} />
                <a aria-label="Simon on LinkedIn" href="https://www.linkedin.com/in/simon-mainfroy-225a4720a/" className="hoverline"> https://fr.linkedin.com/in/simon-mainfroy</a>
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>
  );
};

export default Contact;