import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import { useRef } from "react";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (refName) => {
    if (refName === "homeRef" && homeRef.current) {
      window.scrollTo({
        top: homeRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (refName === "aboutRef" && aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (refName === "projectRef" && projectRef.current) {
      window.scrollTo({
        top: projectRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (refName === "contactRef" && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <ProjectPage ref={projectRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
