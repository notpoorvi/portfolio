import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-atkinson">
        {/* <div className="bg-gradient-to-t from-[#98A1BC] from-[20%] to-[#565878] to-[100%] min-h-screen relative"> */}
        <h1 className="font-atkinson text-xl"></h1>
        <Navbar />
        <Header />
        <ResumeButton />
        <AboutSection />
        <ExperienceSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
