import React from 'react';

import html5 from "assets/images/html5.png";
import css3 from "assets/images/css3.png";
import sass from "assets/images/sass.png";
import bootstrap from "assets/images/bootstrap.png";
import react from "assets/images/react.png";
import redux from "assets/images/redux.png";
import javascript from "assets/images/javascript.png";
import nodejs from "assets/images/nodejs.png";
import ruby from "assets/images/ruby.png";
import rails from "assets/images/rails.png";
import postgresql from "assets/images/postgresql.png";
import webpack from "assets/images/webpack.png";
import github from "assets/images/github.png";
import heroku from "assets/images/heroku.png";
import langues from "assets/images/langues.png";


const Skills = () => {
  return (
    <section id="skills" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text banner-sections">Skills</h3>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">HTML</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={html5} className="responsive-img"/>HTML5
                </div>
                <div className="col s4 m2">
                  <img alt="" src={react} className="responsive-img"/>JSX
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">CSS</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={css3} className="responsive-img"/>CSS3
                </div>
                <div className="col s4 m2">
                  <img alt="" src={sass} className="responsive-img"/>SASS
                </div>
                <div className="col s4 m2">
                  <img alt="" src={bootstrap} className="responsive-img"/>Bootstrap
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Javascript</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={react} className="responsive-img"/>React
                </div>
                <div className="col s4 m2">
                  <img alt="" src={javascript} className="responsive-img"/>Javascript
                </div>
                <div className="col s4 m2">
                  <img alt="" src={redux} className="responsive-img"/>Redux
                </div>
                <div className="col s4 m2">
                  <img alt="" src={nodejs} className="responsive-img"/>Node
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Back-End</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={ruby} className="responsive-img"/>Ruby
                </div>
                <div className="col s4 m2">
                  <img alt="" src={rails} className="responsive-img"/>Rails
                </div>
                <div className="col s4 m2">
                  <img alt="" src={postgresql} className="responsive-img"/>PostgreSQL
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Tools</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={webpack} className="responsive-img"/>Webpack
                </div>
                <div className="col s4 m2">
                  <img alt="" src={github} className="responsive-img"/>Github
                </div>
                <div className="col s4 m2">
                  <img alt="" src={heroku} className="responsive-img"/>Heroku
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Langues</h4>
              <div className="row text-center">
                <div className="col s4 m2">
                  <img alt="" src={langues} className="responsive-img"/>Anglais niveau B2
                </div>
                <div className="col s4 m2">
                  <img alt="" src={langues} className="responsive-img"/>Espagnol niveau A2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
