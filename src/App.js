import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useRef, useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { motion, useAnimation, Variants, useInView } from "framer-motion";
import Project from "./components/Project";
import projectData from "./components/projectData";
const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: { ref: homeRef },
    about: { ref: aboutRef },
    project: { ref: projectRef },
    contact: { ref: contactRef },
  };

  const scrollToSection = (refName) => {
    const ref = sectionRefs[refName].ref.current;

    if (ref) {
      const rect = ref.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop - 80; // Adjust the offset as needed

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Ref with name ${refName} not found or is null.`);
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={homeRef} // Add the ref assignment here
      >
        <Home />
      </motion.section>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        ref={aboutRef}
      >
        <About />
      </motion.div>

      <div className="pt-20 bg-slate-100" ref={projectRef}>
        <div className="flex justify-center">
          <h2 className="bg-white px-2 text-slate-700 uppercase text-2xl font-bold inline-block rounded shadow">
            My Projects
          </h2>
        </div>

        {projectData.map((data) => (
          <section
          // Add the ref assignment here
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Project
                title={data.title}
                description={data.description}
                techStack={data.techStack}
                previewImage={data.previewImage}
                demoLink={data.demoLink}
                githubLink={data.githubLink}
              />
            </motion.div>
          </section>
        ))}
      </div>
      <motion.div
        ref={contactRef}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <section>
          <Contact />
        </section>
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
