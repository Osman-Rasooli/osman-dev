import React, { ReactNode } from "react";

const Button: React.FC<{
  href: string;
  children: ReactNode;
  download?: boolean;
}> = ({ href, children, download = false }) => {
  return (
    <a
      href={href}
      className="btn inline-block text-white p-8 relative tracking-[1px] mt-10 group"
      download={download ? "Osman_Rasooli_Resume" : false}
    >
      <span className="btn__circle absolute top-0 left-0 h-full w-full shadow-sm shadow-white transition-all ease-linear duration-200 rounded-casual-round group-hover:scale-0"></span>
      <span className="btn__white-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-casual-round scale-0 w-14 h-14 bg-white flex transition-all ease-linear duration-200  group-hover:scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="icon-arrow-right"
          viewBox="0 0 21 12"
          className="m-auto w-6 h-6"
        >
          <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
        </svg>
      </span>
      <span className="uppercase font-gilroyBold absolute top-1/2 -translate-y-1/2 whitespace-nowrap z-100 py-6 px-2 transition-all ease-linear duration-200 group-hover:translate-x-10">
        {children}
      </span>
    </a>
  );
};

export default Button;
