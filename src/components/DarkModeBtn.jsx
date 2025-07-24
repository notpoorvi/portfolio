import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = async () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-16 h-8 flex items-center px-2 rounded-full bg-gradient-to-r from-[#8f8c60] to-[#575878] shadow-xl hover:cursor-pointer transition-all duration-300`}
    >
      <div
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon size={20} className="text-blue-700" />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
      </div>

      <div className="flex w-full justify-between items-center  text-white font-semibold">
        <Sun size={20} />
        <Moon size={20} />
      </div>
    </button>
  );
};

export default DarkModeBtn;
