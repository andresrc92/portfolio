import Typewriter from "typewriter-effect";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";

const Intro = () => {
  return (
    <section className="relative w-screen h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="w-full">
          <h1 className={`text-left ml-20 text-blue-500 text-5xl mt-15`}>
            Hi, I'm <span className="text-[#915EFF]"> Andrés</span>
          </h1>

          <div className="mt-30 text-blue-800 w-full ml-0 text-center">
            <p className={`mb-2`}>I can help you with</p>
            <h1 className="text-5xl">
              <Typewriter
                options={{
                  strings: ["Robotics", "AI & ML", "Electronics", "IoT"],
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

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

const props: SectionWrapperProps = {
  idName: "home",
  Component: Intro,
};

const WrappedIntro = SectionWrapper(props);
export default WrappedIntro;
