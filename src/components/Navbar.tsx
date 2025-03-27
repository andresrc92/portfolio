import { useEffect } from "react";
import { FaBriefcase, FaEnvelope, FaInfo } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

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
    <nav className="w-screen fixed top-0 z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-950">
            {" "}
            Andrés Rivas{" "}
          </a>

          {/* Mobile NavBar */}
          <div
            className="relative cursor-pointer z-40 md:hidden gap-5 flex felx-row mr-10 scale-130"
            onClick={() => setMenuOpen((prev: any) => !prev)}
          >
            <a
              href="#about"
              className="text-blue-950 hove:text-white transition-colors"
            >
              <FaInfo />
            </a>
            <a
              href="#experience"
              className="text-blue-950 hove:text-white transition-colors"
            >
              <FaBriefcase />
            </a>
            <a
              href="#contact"
              className="text-blue-950 hove:text-white transition-colors"
            >
              <FaEnvelope />
            </a>

            <button
              onClick={toggleResume}
              className="text-blue-950 hove:text-white transition-colors"
            >
              <FaDownload />
            </button>
          </div>

          {/* Desktop NavBar */}
          <div className="hidden md:flex items-center space-x-8">
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
