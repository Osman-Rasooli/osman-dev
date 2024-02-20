import Navbar from "./navbar/Navbar";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      //   icon: (
      //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      //   ),
    },
  ];
  return (
    <header className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
