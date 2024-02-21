import { TextGenerateEffect } from "../../ui/text-generate-effect";
const About = () => {
  return (
    <section className="about-me min-h-[500px] flex justify-center items-center">
      <div className=" max-w-[60vw]">
        <TextGenerateEffect words="I'm a passionate web developer with a knack for problem-solving and a keen eye for design. With a background in computer science, I'm dedicated to crafting engaging and innovative digital experiences. I thrive in collaborative environments and am committed to delivering top-notch solutions that leave a lasting impact." />
      </div>
    </section>
  );
};

export default About;
