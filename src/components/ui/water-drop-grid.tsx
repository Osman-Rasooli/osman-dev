/* eslint-disable @typescript-eslint/no-explicit-any */

import anime from "animejs";
import { useEffect, useRef } from "react";

const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 40;
const GRID_HEIGHT = 30;

const DotGrid = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const dataIndex = target.dataset.index;
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: dataIndex,
      }),
    });
  };

  const dots: any[] = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
          ref={
            i === 19 && j === 10
              ? (buttonRef as React.RefObject<HTMLDivElement>)
              : null
          }
        >
          <div
            className="dot-point h-2 w-2 rounded-casual-round bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
