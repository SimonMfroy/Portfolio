import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Misc = () => {
  return (
    <section id="misc" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text banner-sections">Passions</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">Voyage en Amérique du sud</span>
                  </p>
                  <p className="brown-text">
                    Passionné de voyages, j'ai eu la chance de découvrir ce continent magnifique au travers de six pays en quatre mois :
                  </p>
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
                      Chili
                    </li>
                    <li>
                      Brésil
                    </li>
                    <li>
                      Colombie
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">Voyages en Europe</span>
                  </p>
                  <p className="brown-text">Que ce soit pour les vacances, pour des projets scolaires ou pour travailler j'ai pu parcourir quelques pays en Europe :</p>
                  <ul>
                    <li>
                      Angleterre
                    </li>
                    <li>
                      Irlande
                    </li>
                    <li>
                      Espagne
                    </li>
                    <li>
                      Italie
                    </li>                
                  </ul>
                  <br/> 
                  <br/> 
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">Sports</span>
                  </p>
                  <p className="brown-text"> Pour moi le sport a toujours été important. Principalement fan des sports collectifs j'ai aussi pratiqué quelques sports individuels</p>
                  <ul>
                    <li>
                      Football
                    </li>
                    <li>
                      Basketball
                    </li>
                    <li>
                      Handball
                    </li>
                    <li>
                      Ping-pong
                    </li>
                    <li>
                      Boxes (Française, Thaïlandaise, Chinoise et Kick-Boxing)
                    </li>
                    <li>
                      Badminton
                    </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">Théâtre</span>
                  </p>
                  <p className="brown-text">
                      J'ai commencé le théâtre très jeune, je suis monté pour la première fois sur scène à 9 ans devant 400 personnes.
                  </p>
                  <ul>
                    <li>
                      "Les Canuts" 
                    </li>
                    <li>
                      "Jean Moulin"
                    </li>
                    <li>
                      "Oscar et la Dame Rose", Schmitt
                    </li>
                    <li>
                      "La Mouette", Tchekov
                    </li>
                    <li>
                      Théâtre d'improvisation
                    </li>
                  </ul>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Misc;
