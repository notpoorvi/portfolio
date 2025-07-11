import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-atkinson text-xl">
        This text uses Atkinson Hyperlegible Next font!
      </h1>
    </>
  );
}

export default App;
