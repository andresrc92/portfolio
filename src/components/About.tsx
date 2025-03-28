import { tools } from "../constants";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";

const ToolsCard = ({ tool }: any) => {
  return (
    <div className="text-black text-center flex flex-col w-full justify-center px-5">
      <h1 className="relative bg-white px-4 mx-auto top-3">{tool.title}</h1>{" "}
      <div className="flex flex-row border-2 rounded-2xl border-black p-5 justify-evenly">
        {tool.icons.map((icon: any, index: number) => (
          <img
            key={index}
            src={icon}
            alt="web-development"
            className="w-15 object-contain hover:scale-110"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative w-screen min-h-screen mx-auto gap-7 flex flex-col xl:flex-row justify-evenly pt-20">
      <div className={`xl:w-1/2 items-start`}>
        <div className="w-full px-10">
          <h1 className={`text-left ml-20 text-black text-3xl`}>
            Introduction
          </h1>

          <p className=" text-black text-xl mt-9 mx-10 max-w-4xl">
            I am an Electronics Engineer specialized in Robotics & AI. I take
            pride in my ability to learn and adapt to new technologies as part
            of my entrepreneurial spirit. I am passionate about facing
            challenges alongside a team that values innovation, collaboration
            and continuous learning.
          </p>
        </div>
      </div>

      <div className="justify-center flex xl:w-1/2 px-10">
        <div className="flex flex-col w-full">
          {tools.map((tool: any, index: number) => (
            <ToolsCard key={index} tool={tool} />
          ))}
        </div>
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
