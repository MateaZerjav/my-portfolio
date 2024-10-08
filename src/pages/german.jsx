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

export default function German() {
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
                header1="Hallo, ich bin Matea Žerjav"
                header2="Junior Frontend-Entwickler mit Sitz in Stuttgart, Deutschland."
                paragraph="Lassen Sie uns zusammenarbeiten und ich werde Ihnen mein Bestes geben"
                button="Loslegen"
                scroll="contact-matea-deu"
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
        <Tehnologies header="Technologien, mit denen ich gerne arbeite" />
        <h4>Entdecken Sie meine Arbeit: Durchsuchen Sie meine Projekte</h4>
        <div className="container">
          <div className="row">
            <div className="col">
              <Projects
                Header="Dictionary App"
                Title="Erstellt mit React.js, einer aktiven API, responsiver Entwicklung und CSS"
                photo={photo_dictionary}
                link="https://dictionary-final-project.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Elektro-Tea"
                Title="Erstellt mit React.js, responsiver Entwicklung und 
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
                Title="Gebaut mit HTML, einer aktiven API, responsiver Entwicklung JavaScript"
                photo={photo_poetry}
                link="https://croatianversecraft.netlify.app/"
              />
            </div>
            <div className="col-sm col-12">
              <Projects
                Header="Weather App"
                Title="Gebaut mit HTML, einer aktiven API sowie erweitertem CSS und JavaScript"
                photo={photo_weather}
                link="https://main--phenomenal-dolphin-9ca8ea.netlify.app/"
              />
            </div>
          </div>
        </div>
      </main>
      <footer name="contact-matea-deu">
        <ContactMe
          inquiry="Arbeitsanfrage"
          paragraph="Senden Sie Ihre Anfrage per E-Mail"
          button="E-mail senden"
          contact_form="/deuform"
        />
        <SocialMedia
          paragraph="Um meinen Lebenslauf zu erhalten, klicken Sie "
          cv="https://www.dropbox.com/scl/fi/1vqtc0g7zl6s7yhupbg10/Matea-erjavLebenslauf.pdf?rlkey=ccb5lqvoqc0yvlcm0cumuk1qc&st=lcvhqzwg&dl=0"
          here="hier"
          madeby="Diese Website wurde mit React.js und Bootstrap erstellt, entwickelt von
         Matea Zerjav, und"
          github="ist Open-Source auf GitHub"
        />
      </footer>
    </div>
  );
}
