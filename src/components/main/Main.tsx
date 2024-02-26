import Hero from "./hero/Hero";
import About from "./about/About";
import SkillsSection from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const Main = () => {
  return (
    <main className="bg-stone-950 text-slate-300">
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
