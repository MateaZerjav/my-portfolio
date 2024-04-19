import "./App.css";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import photo from "./photos/photo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-center mt-5 ">
          <div className="row">
            <div className="col">
              {" "}
              <Hero />
            </div>
            <div className="col">
              <img className="img-fluid  MateasPhoto" src={photo} alt="Matea" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
