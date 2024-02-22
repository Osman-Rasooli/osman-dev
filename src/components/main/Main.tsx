import Hero from "./hero/Hero";
import About from "./about/About";

const Main = () => {
  return (
    <main className="bg-[linear-gradient(40deg,rgb(7,15,43),rgb(27,26,85))]">
      <Hero />
      <About />
    </main>
  );
};

export default Main;
