import { Tilt } from "react-tilt";
import { services } from "../constants";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";

const TechCard = ({ title, icon }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="bg-tertiary border-2 border-gray-500 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-20 h-20 object-contain"
          loading="lazy"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className="relative w-screen h-screen mx-auto">
      <div
        className={`inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="w-full">
          <h1 className={`text-left ml-20 text-black mt-15 text-3xl`}>
            Introduction
          </h1>

          <p className=" text-black text-xl mt-9 max-w-4xl">
            I am an Electronics Engineer specialized in Robotics & AI. I take
            pride in my ability to learn and adapt to new technologies as part
            of my entrepreneurial spirit. I am passionate about facing
            challenges alongside a team that values innovation, collaboration
            and continuous learning.
          </p>
        </div>
      </div>

      <div className="grid grid-flow-col grid-cols-4 gap-5 text-black mt-20 mx-80 text-center h-2/3">
        {services.map((service: any, index: any) => (
          <TechCard key={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

const props: SectionWrapperProps = {
  idName: "about",
  Component: About,
};

const WrappedAbout = SectionWrapper(props);
export default WrappedAbout;
