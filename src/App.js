import "./App.css";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./photos/photo.jpg";
import ContactMe from "./ContactMe";
import SocialMedia from "./SocialMedia";

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
          <footer id="contact-matea">
            <ContactMe />
            <SocialMedia />
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
