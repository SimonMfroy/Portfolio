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
              <p><img alt="GrandLyon logo" src={grandlyon} className="responsive-img center-block"/></p>
            </div>
            <div className="col s12 m2">
              <p>
                <span className="card-title"><p href="#" className="teal-text hoverline">l'IDEF</p></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Employé polyvalent</div>
          <p>
            L'IDEF, pour Institut Département de l'Enfance et de la Famille, est un centre d'accueil d'urgence pour enfants en difficultés.
            J'ai occupé plusieurs postes dans ce centre, le dernier étant Employé polyvalent.
          </p>
          <p> 
            Mais j'ai également fait du standard, de la preparation
            de commandes, de la livraison entre autre. J'ai aussi occupé un poste à la buanderie ou encore initié un tri des archives de plus de vingt ans.
          </p>
          <p>
            Très polyvalent et ayant un bon contact pour m'intégrer rapidement aux équipes déjà en place, je venais renforcer les secteurs qui en avaient besoin.
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
              <p><img alt="crocknroll logo" src={crocknroll} className="responsive-img center-block bg-dark"/></p>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><p className="teal-text hoverline">Crock'n Roll</p></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Barman / Serveur</div>
          <p>
            Le Crock'n Roll est un restaurant présent à Lyon, principalement barman j'ai aussi fais du service lorsque nécessaire.
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
              <p><img alt="different flag for langages" src={langues} className="responsive-img center-block"/></p>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><p className="teal-text hoverline"></p></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Voyage linguistique</div>
          <p>
            Un voyage en amérique du sud principalement, pour apprendre l'espagnol, conforter mon niveau d'anglais ainsi que de découvrir différentes cultures.
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
              <p><img alt="Small earth" src={divers} className="responsive-img center-block"/></p>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><p className="teal-text hoverline"></p></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Voyage linguistique</div>
          <p>
            De 2011 à 2016 j'ai eu plusieurs emplois dans différents domaines, essayant d'en trouver un qui me plairait ou simplement pour avoir un emploi "alimentaire".
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
