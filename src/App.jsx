import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projects from "./assets/projects.json";
import Aurora from "./components/Aurora";
import Portfolio from "./components/Portfolio";

function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Aurora
        colorStops={["#bcd1f5", "#FFFFFF", "#bcc4db"]}
        blend={1}
        amplitude={isMobile ? 0.5 : 1.5}
        speed={1.5}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-50 font-atkinson">
        <Navbar />
        <Header />
        <ResumeButton />
        <AboutSection />
        <Portfolio projects={projects} />
        {/* <ExperienceSection experiences={experiences} /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
