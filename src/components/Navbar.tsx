import { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: any;
}

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleResume = () => {
    const resumeUrl = "/portfolio/Resume.pdf";
    window.open(resumeUrl);
  };

  return (
    <nav className="w-screen fixed top-0 left-0 z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-950">
            {" "}
            Andrés Rivas{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev: any) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-blue-950 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-blue-950 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#experience"
              className="text-blue-950 hove:text-white transition-colors"
            >
              {" "}
              Work{" "}
            </a>
            <a
              href="#contact"
              className="text-blue-950 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>

            <button
              onClick={toggleResume}
              className="text-blue-950 hove:text-white transition-colors"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
