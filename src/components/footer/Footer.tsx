import TextEffect from "../ui/text-effect";
const Footer = () => {
  return (
    <footer className=" bg-zinc-950 text-slate-400">
      <p className="max-w-[30rem] mx-auto text-center border-t-[1px] border-slate-800 font-gilroyLight py-5 text-sm tracking-wider flex justify-center">
        <div className="mr-2">
          &copy; {new Date().getFullYear()}. Designed and Built by{" "}
        </div>
        <div className=" font-gilroyBold text-base text-slate-200">
          <TextEffect text="Osman Rasooli" />
        </div>
      </p>
    </footer>
  );
};

export default Footer;
