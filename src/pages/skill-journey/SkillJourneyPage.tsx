import { ArrowLeft } from "lucide-react";
import Cards from "../../components/skilljourney/Cards";
import { useNavigate } from "react-router";

//TODO: remove imagePosition and textPosition from card data and pass it as props to Cards component

const card1Data = [
  {
    title: "Start with Clarity",
    featureEmphasis: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: "skilljourney/Cardfirst1.png",
  },
  {
    image: "skilljourney/cardfirst2.png",
    description: "Clarity unlocked—stickers, sips, and skills all in one go!",
    imagePosition:
      "xl:w-[23.125rem] xl:h-[23.125rem] bottom-0 left-4 rounded-l-[1.875rem] lg:w-[17.5rem] lg:h-[17.5rem] md:w-[13.75rem] md:h-[13.75rem] w-[12.5rem] h-[12.5rem]",
    textPosition: "justify-end ",
  },
];

const card2Data = [
  {
    title: "Learn by Doing",
    featureEmphasis: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    image: "skilljourney/cardsecond1.png",
  },
  {
    image: "skilljourney/cardsecond2.png",
    description: "Focused faces—learning mode: ON!",
    imagePosition:
      "xl:w-[35.75rem] xl:h-[20.5625rem] xl:-bottom-10 lg:-bottom-5 md:-bottom-10 -bottom-10 xl:left-15 lg:left-10 md:left-50 -left-14 lg:w-auto lg:h-[13.75rem] md:w-auto md:h-[13.75rem] w-auto h-[11.25rem] ",
    textPosition: "justify-start xl:ml-5 lg:ml-13 md:ml-5 ml-18 mt-5 ",
  },
  {
    image: "skilljourney/cardsecond3.png",
    description: "Laptops, lessons, and a whole lot of growth!",
    imagePosition:
      "xl:w-[35.75rem] xl:h-[20.5625rem] lg:w-auto lg:h-[17.5rem] md:w-auto md:h-[16.25rem] w-auto h-[14.3125rem] -bottom-10 left-1/2 -translate-x-1/2 ",
    textPosition: "justify-center text-center",
  },
];

const card3Data = [
  {
    title: "Get Mentored & Supported",
    featureEmphasis: "You're not learning alone.",
    image: "skilljourney/cardthird1.png",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
  },
];
const card4Data = [
  {
    title: "Achieve & Showcase",
    featureEmphasis: "Build your portfolio, get job-ready.",
    image: "skilljourney/cardfourth1.png",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
  },
];

const SkillJourneyPage = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto my-15">
      <div className="flex flex-col gap-12">
        <button
          className="flex gap-2 items-center hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
          <p className="text-xl tracking-normal">Back to Home</p>
        </button>
        <div className="flex flex-col gap-6">
          <h1 className="sr-only">
            Your SkillShikshya Journey - Learning Path
          </h1>
          <p className="feature-emphasis">Your SkillShikshya Journey</p>
          <p className="display-3 ">
            <span className="text-[#1DA077]">Step</span> In.
            <span className="text-[#1DA077]">Step</span> Up.
            <span className="text-[#1DA077]">Step</span> Out. 🚀
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Cards
            slides={card1Data}
            color="#F45B5B"
            edgeColor="skilljourney/edge.png"
            imagePosition="xl:-left-33 xl:top-[1.375rem] lg:-left-33 lg:top-10 md:-left-10 md:top-1 -left-10 top-10 xl:w-auto xl:max-w-none lg:w-60 lg:max-w-60 md:w-50 md:max-w-50 w-35 max-w-35"
            shadow={true}
            decors="skilljourney/wowleft.png"
          />
          <Cards
            slides={card2Data}
            imageLocation="right"
            color="#5492A0"
            edgeColor="skilljourney/edge1.png"
            imagePosition="-right-10 top-4 lg:-right-16 lg:top-4 md:-right-10 md:top-4 -right-10 top-5 xl:w-auto xl:max-w-none xl:h-auto lg:w-auto lg:max-w-auto lg:h-80 md:w-auto  md:max-w-auto md:h-60 w-35 max-w-35"
            shadow={false}
          />
          <Cards
            slides={card3Data}
            color="#6C64A8"
            imagePosition="xl:-left-38 xl:-bottom-15 lg:-left-38 lg:-bottom-15 md:-left-10 md:-bottom-10 -left-15 bottom-0 xl:w-auto xl:max-w-none xl:h-auto lg:w-70 lg:max-w-70 lg:h-auto md:w-60 md:max-w-60 md:h-auto w-40 max-w-40"
            shadow={false}
          />
          <Cards
            slides={card4Data}
            imageLocation="right"
            color="#A88964"
            imagePosition="xl:-right-30 xl:-bottom-15 lg:-right-30 lg:-bottom-15 md:-right-10 md:-bottom-15 -right-8 bottom-0 xl:w-auto xl:max-w-none lg:w-70 lg:max-w-70 md:w-60 md:max-w-60 w-35 max-w-35"
            shadow={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillJourneyPage;
