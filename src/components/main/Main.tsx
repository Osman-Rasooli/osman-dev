import Hero from "./hero/Hero";
import About from "./about/About";
import SkillsSection from "./skills/Skills";

const Main = () => {
  return (
    <main className="bg-[linear-gradient(40deg,rgb(7,15,43),rgb(27,26,85))]">
      <Hero />
      <About />
      <SkillsSection />
    </main>
  );
};

export default Main;
