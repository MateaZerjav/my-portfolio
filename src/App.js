import "./App.css";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./photos/photo.jpg";
import ContactMe from "./ContactMe";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";

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
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects
                Header="Dictionary App"
                Title="Created using React.js"
                photo=""
              />
            </div>
            <div className="col">
              <Projects
                Header="Weather App"
                Title="Created using React.js"
                photo=""
              />
            </div>
          </div>
          <div className="row"></div>
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
