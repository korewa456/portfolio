import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useRef, useEffect } from "react";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { motion, useAnimation } from "framer-motion";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    project: projectRef,
    contact: contactRef,
  };

  const controls = {
    home: useAnimation(),
    about: useAnimation(),
    project: useAnimation(),
    contact: useAnimation(),
  };

  const handleScroll = () => {
    for (const section in sectionRefs) {
      if (sectionRefs[section].current) {
        const { top, bottom } =
          sectionRefs[section].current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Trigger animation when section is at least 50% visible
        if (top < windowHeight * 0.5 && bottom > windowHeight * 0.5) {
          controls[section].start({ opacity: 1, y: 0 });
        } else {
          controls[section].start({ opacity: 0, y: 20 });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (refName) => {
    if (sectionRefs[refName].current) {
      window.scrollTo({
        top: sectionRefs[refName].current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <motion.section
        ref={homeRef} // Add the ref assignment here
        animate={controls.home}
      >
        <Home />
      </motion.section>
      <motion.section
        ref={aboutRef} // Add the ref assignment here
        initial={{ opacity: 1, y: 0 }}
        animate={controls.about}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.section>
      <motion.section
        ref={projectRef} // Add the ref assignment here
        initial={{ opacity: 0, y: 20 }}
        animate={controls.project}
        transition={{ duration: 0.5 }}
      >
        <ProjectPage />
      </motion.section>
      <motion.section
        ref={contactRef} // Add the ref assignment here
        initial={{ opacity: 0, y: 20 }}
        animate={controls.contact}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.section>
      <Footer />
    </div>
  );
}

export default App;
