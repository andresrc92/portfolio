import Typewriter from "typewriter-effect";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";
import { FaArrowDown } from "react-icons/fa";
// import { ComputersCanvas } from "./canvas";

const Intro = () => {
  return (
    <section className="relative w-screen h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="w-full">
          <h1
            className={`text-left md:ml-20 ml-5 text-blue-500 md:text-5xl text-2xl`}
          >
            Hi, there
          </h1>

          <div className="mt-20 text-blue-800 w-full ml-0 text-center">
            <p className={`mb-2`}>I can help you with</p>
            <h1 className="text-5xl">
              <Typewriter
                options={{
                  strings: [
                    "Software development",
                    "Robotics",
                    "AI & ML",
                    "Electronics",
                    "Sensors & IoT",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: "natural",
                }}
              />
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full text-center absolute bottom-40 align-middle flex justify-center">
        <a href="#about">
          <FaArrowDown className="scale-200 md:scale-400 text-blue-800 animate-bounce" />
        </a>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

const props: SectionWrapperProps = {
  idName: "home",
  Component: Intro,
};

const WrappedIntro = SectionWrapper(props);
export default WrappedIntro;
