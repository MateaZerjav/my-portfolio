import "./portfolio.css";
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "../photos/photo.jpg";
import ContactMe from "../components/ContactMe";
import SocialMedia from "../components/SocialMedia";
import Projects from "../components/Projects";
import photo_poetry from "../photos/AI Croatian poetry generator.png";
import photo_dictionary from "../photos/Dictionary App.png";
import photo_react_weather from "../photos/React-Weather-app.png";
import photo_weather from "../photos/Weather app.png";
import Tehnologies from "../components/Tehnologies";
import { Link } from "react-router-dom";

export default function Croatian() {
  return (
    <div className="App">
      <style>{"body{background-color: rgba(7, 67, 10, 0.196);}"}</style>
      <header className="App-header">
        <Link to="/">English</Link>
        <Link to="/german">Deutsch</Link>
        <Link to="/croatian">Hrvatski</Link>
        <div className="container text-center mt-5 ">
          <div className="row">
            <div className="col-12">
              <img
                className="img-fluid d-block d-sm-none  MateasPhoto"
                src={photo}
                alt="Matea"
              />
            </div>
            <div className="col-sm col-12 ">
              {" "}
              <Hero
                header1="Bok, ja sam Matea Žerjav"
                header2="Mladi razvijač sučelja, nalazim se u Stuttgartu, u  Njemačkoj."
                paragraph="Radujem se budućoj suradnji."
                getstarted="Krenimo"
              />
            </div>
            <div className="col">
              <img
                className="img-fluid d-none d-sm-block MateasPhoto"
                src={photo}
                alt="Matea"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Tehnologies header="Razvojni alati s kojima se rado koristim" />
        <h4>Otkrij moj rad: Pogledaj moje projekte</h4>
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects
                Header="Dictionary App"
                Title="Razvijeno koristeći React.js, aktivni API, prilagodljivi razvoj i CSS"
                photo={photo_dictionary}
                link="https://dictionary-final-project.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Razvijeno koristeći React.js, prilagodljivi razvoj i aktivni API"
                photo={photo_react_weather}
                link="https://master--stupendous-alpaca-4c667b.netlify.app/"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Projects
                Header="Poetry generator"
                Title="Sastavljeno HTML-om, koristeći aktivni API, prilagodljivi razvoj, CSS i JavaScript"
                photo={photo_poetry}
                link="https://croatianversecraft.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Sastavljeno HTML-om, koristeći aktivni API, napredni CSS i JavaScript"
                photo={photo_weather}
                link="https://main--phenomenal-dolphin-9ca8ea.netlify.app/"
              />
            </div>
          </div>
        </div>
      </main>
      <footer id="contact-matea-hr">
        <ContactMe
          inquiry="Poslovni upit"
          paragraph="Posalji svoj upit e-mailom"
          button="Kontaktiraj me"
        />
        <SocialMedia
          paragraph="Za preuzimanje zivotopisa klikni"
          cv="https://www.dropbox.com/scl/fi/0rq1rfhx502c37ie318oi/Matea-Zerjav-CV-Resume.pdf?rlkey=m1k1d10w4gxepvxai8jgq15c4&st=kaqqgrw7&dl=0"
          here="ovdje"
          madeby="Ova internet stranica je razvijena koristeci React.js i Bootstrap, od strane Matee Zerjav "
          github="te je otvoreni-izvor na GitHub-u"
        />
      </footer>
    </div>
  );
}
