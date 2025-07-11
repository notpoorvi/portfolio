import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";

function App() {
  return (
    <>
      <div className="">
        {/* <div className="bg-gradient-to-t from-[#98A1BC] from-[20%] to-[#565878] to-[100%] min-h-screen relative"> */}
        <h1 className="font-atkinson text-xl"></h1>
        <Navbar />
        <Header />
        <ResumeButton />
      </div>
    </>
  );
}

export default App;
