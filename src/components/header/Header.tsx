import Navbar from "./navbar/Navbar";
import { IoHomeSharp, IoBriefcase } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaLightbulb, FaEnvelope } from "react-icons/fa6";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IoHomeSharp className="h-4 w-4 text-slate-200 " />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FaUserAlt className="h-4 w-4 text-slate-200 " />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <FaLightbulb className="h-4 w-4 text-slate-200" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IoBriefcase className="h-4 w-4 text-slate-200 " />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FaEnvelope className="h-4 w-4 text-slate-200" />,
    },
  ];
  return (
    <header className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
