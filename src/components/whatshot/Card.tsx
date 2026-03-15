import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CardProps {
  index: number;
  prevIndex: number;
  activeIndex: number;
  isActive: boolean;
  onClick: () => void;
  cardData: CardData;
}

interface CardData {
  count: string;
  title: string;
  description: string;
}

const Card = ({
  index,
  prevIndex,
  activeIndex,
  isActive,
  onClick,
  cardData,
}: CardProps) => {
  const isEntering = isActive;
  const isExiting =
    !isActive && index === prevIndex && prevIndex !== activeIndex;

  // Direction: Forward (1→2, 2→3) or Backward (3→2, 2→1)
  const isForward = activeIndex > prevIndex;

  // Enter class: Forward = from LEFT, Backward = from RIGHT
  const enterClass = isForward ? "enter-from-left" : "enter-from-right";

  // Exit class: Forward = to RIGHT, Backward = to LEFT
  const exitClass = isForward ? "exit-to-right" : "exit-to-left";

  return (
    <div
      className={`xl:h-[28.8125rem] lg:h-[25rem] md:h-[18.75rem] rounded-[2rem] xl:p-10 lg:p-4 md:p-6 p-4 pb-5 transition-all duration-1000 ease-in-out cursor-pointer relative flex flex-col overflow-hidden  ${
        isActive
          ? "flex-2 bg-[#C33241] justify-between"
          : "flex-1 justify-between"
      } `}
      onClick={onClick}
      role="button"
      aria-pressed={isActive}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div
        className={`bg-[#F9EBEC] absolute w-[150%] h-[150%] rounded-full transition-transform duration-1000 ease-in-out origin-bottom-left -bottom-[30%] -left-[30%] pointer-events-none ${
          isActive ? "scale-0" : "scale-100"
        }`}
      ></div>
      <div
        className={`flex justify-end transition-all duration-500 ${
          isActive
            ? "opacity-100 translate-y-0"
            : "opacity-0  pointer-events-none"
        }`}
      >
        <Link
          to="/task-1"
          className="flex items-center gap-2 group font-outfit font-semibold lg:text-[1.125rem] text-[0.875rem] text-white "
        >
          <span>View all Courses</span>{" "}
          <ArrowRight
            size="1.25rem"
            className="left-right transition-all duration-300 "
          />
        </Link>
      </div>

      <div
        className={`flex justify-center gap-10.5 lg:h-auto md:h-[9.375rem] h-[6.25rem] items-center ${
          isEntering
            ? `${enterClass} opacity-0`
            : isExiting
              ? exitClass
              : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          src="whatshot/react.png"
          alt="React logo"
          className=" xl:h-[4.6875rem] lg:h-[3.125rem] md:h-[3.125rem] h-[1.875rem]"
        />
        <img
          src="whatshot/socials.png"
          alt="Social Media icons"
          className=" xl:h-[4.6875rem] lg:h-[3.125rem] md:h-[3.125rem] h-[1.875rem]"
        />
        <img
          src="whatshot/vue.png"
          alt="Vue.js logo"
          className=" xl:h-[4.6875rem] lg:h-[3.125rem] md:h-[3.125rem] h-[1.875rem] scale-150"
        />
        <img
          src="whatshot/pencil.png"
          alt="Pencil icon"
          className=" xl:h-[4.6875rem] lg:h-[2.5rem] md:h-[3.125rem] h-[1.875rem]"
        />
      </div>

      <div className="relative xl:h-[9.375rem] lg:h-[6.25rem] md:h-[6.25rem] h-[3.75rem] w-full">
        <div
          className={`font-nohemi font-bold xl:text-[9.375rem] lg:text-[5rem] md:text-[5rem] text-[3.75rem] leading-[80%] lg:bottom-3 transition-all duration-1000 ease-in-out absolute bottom-0 flex  items-start justify-start  ${
            isActive
              ? "text-white lg:left-0 md:left-20 left-5"
              : "text-[#C33241] left-1/2 -translate-x-1/2"
          }`}
        >
          <span>{cardData.count}</span>
          <span className="text-[3.125rem] -mt-4 leading-none">+</span>
        </div>
        <div
          className={`flex flex-col gap-3 absolute left-1/2 top-1/2 transition-all duration-1000 ease-in-out transform-gpu origin-center xl:w-58 lg:w-48 md:w-58 w-40  ${
            isActive
              ? "text-white xl:translate-x-[10%] lg:-translate-x-[10%] md:-translate-x-[10%] -translate-x-[10%] lg:-translate-y-[50%] md:-translate-y-[40%] -translate-y-[50%]  rotate-0"
              : "lg:text-left text-center text-[#C33241] lg:-translate-x-1/2 md:-translate-x-30 -translate-x-20 xl:-translate-y-70 lg:-translate-y-60 md:-translate-y-40 -translate-y-35 lg:-rotate-90"
          } ${isActive ? "recoil-text-enter" : "recoil-text-exit"}`}
        >
          <span className="xl:text-[2rem] lg:text-[1.25rem] md:text-[1.25rem] text-[1.125rem] font-bold leading-[100%] font-outfit ">
            {cardData.title}
          </span>
          <p className="xl:text-[1.125rem] lg:text-[1rem] md:text-[1rem] text-[0.875rem] font-outfit">
            {cardData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
