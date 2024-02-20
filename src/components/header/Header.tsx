import { BackgroundBeams } from "../ui/background-beams";
import HeaderHeroDetail from "./HeaderHeroDetail";
const Header = () => {
  return (
    <div>
      <header className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <HeaderHeroDetail />
      </header>
      <BackgroundBeams />
    </div>
  );
};

export default Header;
