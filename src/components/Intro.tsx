import Typewriter from "typewriter-effect";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";
// import { ComputersCanvas } from "./canvas";

const Intro = () => {
  return (
    <section className="relative w-screen h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="w-full">
          <h1 className={`text-left ml-20 text-blue-500 text-5xl mt-10`}>
            Hi, I'm <span className="text-[#915EFF]"> Andrés</span>
          </h1>

          <div className="mt-20 text-blue-800 w-full ml-0 text-center">
            <p className={`mb-2`}>Experience in</p>
            <h1 className="text-5xl">
              <Typewriter
                options={{
                  strings: [
                    "Robotics",
                    "AI & ML",
                    "Electronics",
                    "Sensors & IoT",
                    "Digital Twins",
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
