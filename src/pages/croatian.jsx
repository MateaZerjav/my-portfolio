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
        <Link to="/">Englisch</Link>
        <Link to="/german">German</Link>
        <Link to="/croatian">Croatian</Link>
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
                header2="Junior Frontend Developer, nalazim se u Stuttgartu, Njemačka."
                paragraph="Rdimo zajedno i dati ću sve od sebe da Vam pomognem."
                getstarted="Krenimo"
                getstartedId="./#contact-matea-hr"
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
        <Tehnologies />
        <h4>hrvatski: Browse Through My Projects</h4>
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects
                Header="Dictionary App"
                Title="Created using React.js, an active API, responsive development, and CSS"
                photo={photo_dictionary}
                link="https://dictionary-final-project.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Created using React.js, responsive development, and an active API"
                photo={photo_react_weather}
                link="https://master--stupendous-alpaca-4c667b.netlify.app/"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Projects
                Header="Poetry generator"
                Title="Built using HTML, an active API, responsive development, and CSS and JavaScript"
                photo={photo_poetry}
                link="https://croatianversecraft.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Built using HTML, an active API, and advanced CSS and JavaScript"
                photo={photo_weather}
                link="https://main--phenomenal-dolphin-9ca8ea.netlify.app/"
              />
            </div>
          </div>
        </div>
      </main>
      <footer id="contact-matea-hr">
        <ContactMe />
        <SocialMedia />
      </footer>
    </div>
  );
}
