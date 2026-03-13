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
      className={`h-[461px] rounded-[32px] p-10 pb-5 transition-all duration-1000 ease-in-out cursor-pointer relative flex flex-col overflow-hidden  ${
        isActive
          ? "flex-2 bg-[#C33241] justify-between"
          : "flex-1 justify-between"
      } `}
      onClick={onClick}
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
          to="/skill-journey"
          className="flex items-center gap-2 group font-outfit font-semibold text-[18px] text-white "
        >
          <span>View all Courses</span>{" "}
          <ArrowRight className="left-right transition-all duration-300" />
        </Link>
      </div>

      <div
        className={`flex justify-center gap-10.5 ${
          isEntering
            ? `${enterClass} opacity-0`
            : isExiting
              ? exitClass
              : "opacity-0 pointer-events-none"
        }`}
      >
        <img src="whatshot/react.png" alt="" className=" h-[75px]" />
        <img src="whatshot/socials.png" alt="" className=" h-[75px]" />
        <img src="whatshot/vue.png" alt="" className=" h-[75px] scale-150" />
        <img src="whatshot/pencil.png" alt="" className=" h-[75px]" />
      </div>

      <div className="relative h-[150px] w-full">
        <div
          className={`font-nohemi font-bold xl:text-[150px] lg:text-[130px] md:text-[80px] text-[60px] leading-[80%] lg:bottom-3 transition-all duration-1000 ease-in-out absolute bottom-0 flex  items-start justify-start  ${
            isActive
              ? "text-white left-0"
              : "text-[#C33241] left-1/2 -translate-x-1/2"
          }`}
        >
          <span>{cardData.count}</span>
          <span className="text-[50px] -mt-4 leading-none">+</span>
        </div>
        <div
          className={`flex flex-col gap-3 absolute left-1/2 top-1/2 transition-all duration-1000 ease-in-out transform-gpu origin-center w-58 ${
            isActive
              ? "text-white translate-x-[10%] -translate-y-[50%]  rotate-0"
              : "text-[#C33241] -translate-x-1/2 -translate-y-70 -rotate-90"
          } ${isActive ? "recoil-text-enter" : "recoil-text-exit"}`}
        >
          <span className="text-[32px] font-bold leading-[100%] font-outfit ">
            {cardData.title}
          </span>
          <p className="text-[18px] font-outfit">{cardData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
