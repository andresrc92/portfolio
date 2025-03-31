import { FaYoutube } from "react-icons/fa";
import { highlights } from "../constants";
import SectionWrapper, { SectionWrapperProps } from "../hoc/SectionWrapper";

const HighlightsCard = ({ highlight, index }: any) => {
  return (
    <div
      key={index}
      className="text-black flex flex-col px-5 border-2 rounded-2xl border-black hover:scale-105"
    >
      <h1 className="text-left px-4 my-5">{highlight.title}</h1>{" "}
      <img src={highlight.thumbnail} className="w-100" loading="lazy" />
      <p className="mt-5 max-w-100 text-left">{highlight.desc}</p>
      <div className="flex flex-row w-full my-5 justify-around">
        <div className="h-full">
          {highlight.link ? (
            <a href={highlight.link}>
              <FaYoutube className="scale-200" color="red" />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-row w-fit gap-4 h-full">
          {highlight.icons.map((icon: any, index: number) => (
            <img
              key={index}
              src={icon}
              alt="web-development"
              className="h-6 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="relative w-screen text-center min-h-screen mx-auto gap-7 flex flex-col justify-evenly pt-20">
      <h1 className={` text-black text-3xl mb-10`}>Interesting projects</h1>

      <div className="justify-center flex flex-wrap px-10 gap-5 xl:px-80">
        {highlights.map((highlight: any, index: number) => (
          <HighlightsCard highlight={highlight} key={index} />
        ))}
      </div>
    </section>
  );
};

const props: SectionWrapperProps = {
  idName: "highlights",
  Component: Highlights,
};

const WrappedHighlights = SectionWrapper(props);
export default WrappedHighlights;
