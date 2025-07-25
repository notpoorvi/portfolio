import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import experiences from "./assets/experiences.json";
import Aurora from "./components/Aurora";

function App() {
  return (
    <>
      <Aurora
        colorStops={["#bcd1f5", "#FFFFFF", "#bcc4db"]}
        blend={1}
        amplitude={1.5}
        speed={1.5}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-50 font-atkinson">
        {/* <h1 className="font-atkinson text-xl"></h1> */}
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
