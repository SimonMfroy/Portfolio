import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.css';

import Sidebar from "./components/Sidebar";

import Home from "pages/Home";
import About from "pages/About";
import Experience from "pages/Experience";
import Education from "pages/Education";
import Projects from "pages/Projects";
import Skills from "pages/Skills";
import Misc from "pages/Misc";
import Contact from "pages/Contact";


const App = () => (
  <Router>
  <div className="container-fluid">
    <div className="row wrapper min-vh-100 flex-column flex-sm-row">
      <Sidebar />
      <main className="col bg-faded py-3">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apropos" exact component={About} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/education" exact component={Education} />
          <Route path="/projets" exact component={Projects} />
          <Route path="/competences" exact component={Skills} />
          <Route path="/passions" exact component={Misc} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </main>
    </div>
  </div>
  </Router>
);


ReactDOM.render(<App />, document.getElementById("root"));
