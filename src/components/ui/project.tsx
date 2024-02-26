import { IoOpen } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const ProjectDisplay = ({
  img,
  right,
  title,
  desc,
  link,
  codeLink,
  techStack,
}: {
  img: string;
  right: boolean;
  title: string;
  desc: string;
  link: string;
  codeLink: string;
  techStack: string[];
}) => {
  const highlightedWords = [
    "bug tracking",
    "project management",
    "collaboration",
    "productivity",
    "Movies",
    "TV Shows",
    "entertainment",
    "digital",
    "logistics",
    "innovation",
  ];

  const renderedDesc = desc.split(" ").map((word, index) => {
    const isHighlighted = highlightedWords.includes(word);
    return (
      <span key={index} className={`${isHighlighted ? "text-violet-400" : ""}`}>
        {word}{" "}
      </span>
    );
  });
  const renderedTechStack = techStack.map((tech, idx) => (
    <span className=" capitalize" key={idx}>
      {tech}
    </span>
  ));
  return (
    <div className="grid grid-cols-12 w-full h-full gap-y-5">
      <div
        className={`img row-start-1 row-span-full ${
          right ? "md:col-start-1" : "col-start-1 md:col-start-5"
        }  col-span-full md:col-span-8  group bg-slate-700 rounded-[5px] shadow-sm shadow-slate-800 relative cursor-pointer `}
      >
        <div className="h-full w-full">
          <img
            src={img}
            alt="Bugbuddy"
            className="object-cover w-full h-full rounded-[5px] grayscale brightness-75 group-hover:grayscale-0 duration-300 transition-all"
          />
          <div className="w-full h-full bg-violet-400 opacity-20 absolute top-0 left-0 group-hover:opacity-0 rounded-[5px] transition-all duration-300"></div>
        </div>
      </div>
      <div
        className={`details col-start-1 col-span-full text-left ${
          right ? " md:col-start-7  md:text-right" : "  md:col-end-7"
        }     row-start-1 row-span-full flex flex-col justify-center gap-2 md:gap-7 bg-zinc-900 md:bg-transparent bg-opacity-80 relative z-20 px-5 py-7 md:px-0 md:py-0`}
      >
        <div className="title flex flex-col mb-5 md:mb-0">
          <h3 className="text-violet-400 font-gilroyLight md:mb-1  relative z-20">
            Featured Project
          </h3>
          <h2 className="text-slate-50 uppercase font-gilroyBold tracking-wider text-xl md:text-2xl inline-block relative z-20">
            {title}
          </h2>
        </div>
        <div className="description mb-5 md:mb-0 md:px-5 md:py-7 grid z-10 rounded-[5px] text-slate-300 md:text-slate-400 font-gilroyLight tracking-normal row-end-11 md:bg-zinc-900 shadow-sm shadow-slate-900">
          <p>{renderedDesc}</p>
        </div>
        <div
          className={`tech-stack flex justify-end flex-wrap ${
            right ? "justify-end" : "md:justify-start"
          }  gap-x-5 gap-y-2 font-gilroyLight tracking-wider z-10 text-sm mb-5 md:mb-0`}
        >
          {renderedTechStack}
        </div>
        <div
          className={`title inline-flex justify-end ${
            right ? "" : "md:justify-start"
          } gap-5 text-2xl inline-block relative z-20`}
        >
          <a
            href={link}
            target="_blank"
            className="text-slate-300 cursor-pointer"
          >
            <IoOpen />
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="text-slate-300 cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
