import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import Card from "../../components/whatshot/Card";

const cardData = [
  {
    count: "23",
    title: "All Courses",
    description: "courses you're powering through right now.",
  },
  {
    count: "05",
    title: "Upcoming Courses",
    description: "exciting new courses waiting to boost your skills.",
  },
  {
    count: "10",
    title: "Ongoing Courses",
    description: "currently happening—don’t miss out on the action!",
  },
];

const WhatsHotPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col gap-12">
        <button
          className="flex gap-2 items-center hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
          <p className="text-xl tracking-normal">Back to Home</p>
        </button>
        <div className="flex flex-col gap-6">
          <h1 className="sr-only">What's Hot - Explore Trending Skills</h1>
          <p className="feature-emphasis">
            Explore our classes and master trending skills!
          </p>
          <p className="display-3 ">
            Dive Into
            <span className="text-[#1DA077]"> What's Hot Right Now!</span> 🔥
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {cardData.map((data, index) => (
            <Card
              key={index}
              index={index}
              prevIndex={prevIndex}
              activeIndex={activeIndex}
              isActive={activeIndex === index}
              onClick={() => handleCardClick(index)}
              cardData={data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsHotPage;
