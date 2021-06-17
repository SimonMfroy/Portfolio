import React from 'react';
import { Card } from 'react-bootstrap';

import gmailLogo from "assets/images/gmail.png"
import githubLogo from "assets/images/github.png"
import linkedin from "assets/images/linkedin.png"

const Contact = () => {
  return (
    <section id="contact" className="section scrollspy full-height" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text teal banner-sections">Contact</h3>
        <div className="container">
          <Card>
            <Card.Body>
              <p> <img alt="Gmail logo" src={gmailLogo} className="responsive-img center-block"/> 
                <a aria-label="Email Simon" href="mailto:mainfroy.simon@gmail.com" data-position="top" data-tooltip="Email Simon" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-envelope"></i>
                </a>
                <a aria-label="Email Simon" href="mailto:mainfroy.simon@gmail.com" className="hoverline">mainfroy.simon@gmail.com</a>
              </p>
              <p> <img alt="GitHub logo" src={githubLogo} className="responsive-img center-block"/> 
                <a aria-label="View Simon on GitHub" href="http://github.com/simonmainfroy" data-position="top" data-tooltip="View Simon on GitHub" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-github"></i>
                </a>
                <a aria-label="Simon on Github" href="http://github.com/simonmainfroy" className="hoverline"> github.com/simonmainfroy</a>
              </p>
              <p> <img alt="GitHub logo" src={linkedin} className="responsive-img center-block"/>
                <a aria-label="View Simon on LinkedIn" href="https://www.linkedin.com/in/simon-mainfroy-225a4720a/" data-position="top" data-tooltip="View Simon on LinkedIn" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a aria-label="Simon on LinkedIn" href="https://www.linkedin.com/in/simon-mainfroy-225a4720a/" className="hoverline">linkedin.com/in/simon-mainfroy-225a4720a/</a>
              </p>
            </Card.Body>
          </Card>
        </div>
      </section>
  );
};

export default Contact;
