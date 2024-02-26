import React from "react";

interface TooltipProps {
  href: string;
  tooltip: string;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  href,
  tooltip,
  position = "top",
  children,
}) => {
  const tooltipClasses = `tooltip bg-black text-white text-xs px-2 py-1 absolute whitespace-nowrap opacity-0 transition-opacity duration-300`;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const target = e.currentTarget;
    const tooltip = target.querySelector(".tooltip") as HTMLSpanElement;
    tooltip.style.opacity = "1";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const target = e.currentTarget;
    const tooltip = target.querySelector(".tooltip") as HTMLSpanElement;
    tooltip.style.opacity = "0";
  };

  return (
    <li className="inline-block w-1/4 text-center float-left">
      <a
        href={href}
        target="_blank"
        data-tooltip={tooltip}
        data-position={position}
        className="relative block text-whitesmoke"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span className={tooltipClasses}>{tooltip}</span>
      </a>
    </li>
  );
};

export default Tooltip;
