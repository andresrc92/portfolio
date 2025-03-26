import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Intro, About, Experience, Contact } from "./components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={`relative min-h-screen bg-white text-gray-100 w-screen`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Intro />
        <About />
        <Experience />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
