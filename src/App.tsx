import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import WrappedAbout from "./components/About";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={`relative min-h-screen bg-white text-gray-100 w-screen`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Intro />
        <WrappedAbout />
      </div>
    </BrowserRouter>
  );
}

export default App;
