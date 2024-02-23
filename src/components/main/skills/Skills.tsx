import SectionHeading from "../../ui/section-heading";
const About = () => {
  const frontend = ["html", "css", "sass", "js", "reactjs", "nextjs"];
  const backend = [
    "php",
    "laravel",
    "nodejs",
    "expressjs",
    "firebase",
    "mysql",
    "mongodb",
  ];
  const others = ["wordpress", "figma", "jest", "gulp"];
  return (
    <section className="skills pt-5 pb-20 flex flex-col md:flex-row justify-center items-center gap-5 relative overflow-hidden">
      <SectionHeading title="Skills" />
      <div className="px-8 md:px-10 md:pl-8 lg:px-32 lg:pl-12 w-full lg:ml-10">
        {/* Frontend */}
        <div className="w-full text-slate-100 mb-10">
          <div className="">
            <h3 className=" text-violet-500 text-4xl mb-5">Frontend</h3>
            <ul className="flex gap-4 px-10">
              {frontend.map((fr, idx) => (
                <li
                  key={fr + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-15 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {fr}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full text-slate-100 mb-10">
          <div className="my-5">
            <h3 className=" text-violet-500 text-4xl mb-5">Backend</h3>
            <ul className="flex gap-4 px-10">
              {backend.map((be, idx) => (
                <li
                  key={be + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-15 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {be}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full text-slate-100 mb-10">
          <div className="">
            <h3 className=" text-violet-500 text-4xl mb-5">Other Tools</h3>
            <ul className="flex gap-4 px-10">
              {others.map((ot, idx) => (
                <li
                  key={ot + idx}
                  className="bg-slate-300 px-4 py-3 rounded-casual-round bg-opacity-15 text-slate-200 border-[1px] border-violet-600 font-bold uppercase"
                >
                  {ot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
