import { motion } from "framer-motion";
import SectionHeading from "../../ui/section-heading";
import Project1Img from "../../../assets/bugbuddy.png";
import Project2Img from "../../../assets/movieflicks.png";
import Project3Img from "../../../assets/digitallogistics.png";

import ProjectDisplay from "../../ui/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative max-w-[1100px] mx-auto px-[25px] sm:px-[50px] md:px-[70px] lg:px-[100px] py-[60px] md:py-[80px] lg:py-[100px]"
    >
      <SectionHeading title="Projects" />
      <div className=" text-slate-200 z-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className=" mb-10 md:mb-[100px]"
        >
          <ProjectDisplay
            img={Project1Img}
            title="BugBuddy App"
            desc="A web application designed to streamline bug tracking and project management for development teams which facilitates collaboration and improves productivity."
            link="https://bugbuddy.vercel.app/"
            codeLink="https://github.com/Osman-Rasooli/bugbuddy"
            techStack={[
              "react",
              "context api",
              "recharts",
              "formik",
              "Tailwindcss",
            ]}
            right={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeInOut",
          }}
          className=" mb-10 md:mb-[100px]"
        >
          <ProjectDisplay
            img={Project2Img}
            title="MovieFlicks App"
            desc="A web application that allows users to explore a vast collection of movies and TV shows, providing an immersive entertainment experience. "
            link="https://movieflicks.vercel.app/"
            codeLink="https://github.com/Osman-Rasooli/movieflicks"
            techStack={["react", "sass", "swiper", "api"]}
            right={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeInOut",
          }}
          className=" mb-10 md:mb-[100px]"
        >
          <ProjectDisplay
            img={Project3Img}
            title="Digital Logistics"
            desc="A dynamic static website dedicated to digital logistics solutions. It embodies the forefront of digital innovation in the logistics industry."
            link="https://osman-rasooli.github.io/Digital_Logistics/"
            codeLink="https://github.com/Osman-Rasooli/Digital_Logistics"
            techStack={["javascript", "masonryJs", "rellaxJs", "animate.css"]}
            right={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
