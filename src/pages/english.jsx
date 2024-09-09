import "./portfolio.css";
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "../photos/photo.jpg";
import ContactMe from "../components/ContactMe";
import SocialMedia from "../components/SocialMedia";
import Projects from "../components/Projects";
import photo_poetry from "../photos/AI Croatian poetry generator.png";
import photo_dictionary from "../photos/Dictionary App.png";
import photo_elektro_tea from "../photos/Elektro tea.png";
import photo_weather from "../photos/Weather app.png";
import Tehnologies from "../components/Tehnologies";
import Languages from "../components/Languages";

export default function English() {
  return (
    <div className="App">
      <style>{"body{background-color: rgba(7, 67, 10, 0.196);}"}</style>
      <header className="App-header">
        <Languages />
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
                header1="Hi, I am Matea Žerjav"
                header2="Junior Frontend Developer, based in Stuttgart, Germany."
                paragraph="Let’s work together and i’ll help you by all my best"
                button="Get started"
                scroll="contact-matea-eng"
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
        <Tehnologies header="Technologies I Enjoy Working With" />
        <h4>Discover My Work: Browse Through My Projects</h4>
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
                Title="Created using React.js, responsive development, and 
Tailwind CSS "
                photo={photo_elektro_tea}
                link="https://elektro-tea.hr/"
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
      <footer name="contact-matea-eng">
        <ContactMe
          inquiry="Work Inquiry"
          paragraph="Send your inquiry through e-mail"
          button="Let’s talk here"
          contact_form="/enform"
        />
        <SocialMedia
          paragraph="To get my CV Resume click"
          cv="https://www.dropbox.com/scl/fi/zn5j63t3j4y3omb4o6qg4/Matea-erjavCV-Resume.pdf?rlkey=iiykbgq4bgsm3aqi6wkw0xcan&st=2kj721mw&dl=0"
          here="here"
          madeby="This website was created using React.js and Bootstrap, developed by
        Matea Zerjav, and is"
          github="open-sourced on GitHub"
        />
      </footer>
    </div>
  );
}
