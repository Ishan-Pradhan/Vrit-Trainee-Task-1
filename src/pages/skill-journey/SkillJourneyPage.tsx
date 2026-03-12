import Cards from "../../components/skilljourney/Cards";

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
    imagePosition: "w-[370px] h-[370px] bottom-0 left-4 rounded-l-[30px]",
    textPosition: "justify-end ",
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
    imagePosition: "w-[572px] h-[329px] -bottom-10 left-4 ",
    textPosition: "justify-start ml-5 ",
  },
  {
    image: "skilljourney/cardsecond3.png",
    description: "Laptops, lessons, and a whole lot of growth!",
    imagePosition: "w-[572px] h-[329px] -bottom-10 left-4 ",
    textPosition: "justify-center text-center",
  },
];

const SkillJourneyPage = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <p className="feature-emphasis">Your SkillShikshya Journey</p>
          <p className="display-3 ">
            <span className="text-[#1DA077]">Step</span> In.{" "}
            <span className="text-[#1DA077]">Step</span> Up.{" "}
            <span className="text-[#1DA077]">Step</span> Out. 🚀
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Cards
            slides={card1Data}
            color="#F45B5B"
            edgeColor="skilljourney/edge.png"
            imagePosition="-left-33 top-[22px]"
            shadow={true}
          />
          <Cards
            slides={card2Data}
            imageLocation="right"
            color="#5492A0"
            edgeColor="skilljourney/edge1.png"
            imagePosition="-right-10 top-4"
            shadow={false}
          />
          <Cards
            slides={card3Data}
            color="#6C64A8"
            imagePosition="-left-38 -bottom-15"
            shadow={false}
          />
          <Cards
            slides={card4Data}
            imageLocation="right"
            color="#A88964"
            imagePosition="-right-30 -bottom-15"
            shadow={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillJourneyPage;
