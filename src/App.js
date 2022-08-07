import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import AboutMe from "./Components/AboutMe";
import Expertise from "./Components/Expertise";
import Contact from "./Components/Contact";
import { Zoom, Flip, Slide, Fade, Bounce, Roll } from "react-reveal";

function App() {
  return (
    <div id="home" className="App">
      <Header />
      <Main />
      <AboutMe />
      <Expertise />
      <Contact />
    </div>
  );
}

export default App;
