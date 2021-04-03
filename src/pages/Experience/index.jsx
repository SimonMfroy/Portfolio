import React from 'react';

import grandlyon from "assets/images/grandlyon.png"
import crocknroll from "assets/images/crocknroll.png"
import langues from "assets/images/langues.png"
import divers from "assets/images/diversmonde.png"

import { Card } from 'react-bootstrap';


const Experience = () => {
  return (
    <section id="experience" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
    <h3 className="page-title white-text banner-sections">Experience</h3>
    <div className="container">

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="#"><img alt="GrandLyon logo" src={grandlyon} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m2">
              <p>
                <span className="card-title"><a href="#" className="teal-text hoverline">l'IDEF</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Employé polyvalent</div>
          <p>
            L'IDEF, pour Institut Département de l'Enfance et de la Famille, est un centre d'accueil d'urgence pour enfants en difficultés
          </p>
        </div>
        </Card.Body>
        <Card.Footer>
          <span> 2018 | Bron, FR</span>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="https://www.dominos.fr/"><img alt="Dominos logo" src={crocknroll} className="responsive-img center-block bg-dark"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="#" className="teal-text hoverline">Crock'n Roll</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Barman / Serveur</div>
          <p>
            Le Crock'n Roll est un restaurant présent à Lyon
          </p>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>2017 - 2018 | Lyon, FR</span>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="#"><img alt="Dominos logo" src={langues} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="#" className="teal-text hoverline">Voyage linguistique</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Voyage linguistique</div>
          <p>
            Un voyage en amérique du sud principalement, pour apprendre l'espagnol ainsi que différentes cultures.
          </p>
          <h6>Pays visités</h6>
          <ul>
            <li>
              Equateur
            </li>
            <li>
              Pérou
            </li>
            <li>
              Bolivie
            </li>
            <li>
              Chilie
            </li>
            <li>
              Espagne
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span> 2017 </span>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="#"><img alt="Dominos logo" src={divers} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="#" className="teal-text hoverline">Divers</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Voyage linguistique</div>
          <p>
            De 2011 j'ai eu plusieurs emplois dans différents domaines, essayant de trouver un domaine qui me plairait.
          </p>
          <h6>Différentes expériences :</h6>
          <ul>
            <li>
              Barman
            </li>
            <li>
              Commercial
            </li>
            <li>
              Standardiste
            </li>
            <li>
              Préparateur de commandes
            </li>
            <li>
              Vendeur gondolier
            </li>
            <li>
              Animateur
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span> 2011 - 2016 </span>
        </Card.Footer>
      </Card>

    </div>
  </section>
  );
};

export default Experience;
