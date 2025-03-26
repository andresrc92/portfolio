import { experience } from "../constants";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#eee",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="text-black mt-20 w-screen my-12 flex justify-center text-3xl">
        <h1>Work experience</h1>
      </div>
      <div className="text-black relative w-screen flex flex-col items-center ">
        <VerticalTimeline lineColor="gray">
          {experience.map((exp: any, index: any) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="h-40"></div>
    </>
  );
};

const props: SectionWrapperProps = {
  idName: "experience",
  Component: Experience,
};

const WrappedExperience = SectionWrapper(props);
export default WrappedExperience;
