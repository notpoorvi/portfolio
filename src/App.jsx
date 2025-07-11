import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#98A1BC] from-[20%] to-[#565878] to-[100%] h-screen">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <h1 className="font-atkinson text-xl  "></h1>
        <Navbar />
      </div>
    </>
  );
}

export default App;
