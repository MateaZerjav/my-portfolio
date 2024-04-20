import "./App.css";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./photos/photo.jpg";
import ContactMe from "./ContactMe";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import photo_poetry from "./photos/AI Croatian poetry generator.png";
import photo_dictionary from "./photos/Dictionary App.png";
import photo_react_weather from "./photos/React-Weather-app.png";
import photo_weather from "./photos/Weather app.png";
import Tehnologies from "./Tehnologies";

function App() {
  return (
    <div className="App">
      <style>{"body{background-color: rgba(7, 67, 10, 0.196);}"}</style>
      <header className="App-header">
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
              <Hero />
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
        <h4>Discover My Work: Browse Through My Projects</h4>
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects
                Header="Dictionary App"
                Title="Created using React.js"
                photo={photo_dictionary}
                link="https://dictionary-final-project.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Created using React.js"
                photo={photo_react_weather}
                link="https://master--stupendous-alpaca-4c667b.netlify.app/"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Projects
                Header="Poetry generator"
                Title="Created using API"
                photo={photo_poetry}
                link="https://croatianversecraft.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Created using API"
                photo={photo_weather}
                link="https://main--phenomenal-dolphin-9ca8ea.netlify.app/"
              />
            </div>
          </div>
        </div>
      </main>
      <footer id="contact-matea">
        <ContactMe />
        <SocialMedia />
      </footer>
    </div>
  );
}

export default App;
