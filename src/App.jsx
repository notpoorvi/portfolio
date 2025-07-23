import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import experiences from "./assets/experiences.json";

function App() {
  return (
    <>
      <div className="font-atkinson">
        <h1 className="font-atkinson text-xl"></h1>
        <Navbar />
        <Header />
        <ResumeButton />
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
