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
  },
];

const SkillJourneyPage = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="display-3 ">Skill Journey</h1>
          <p className="feature-emphasis ">
            Transform your career with our comprehensive skill development
            program.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Cards slides={card1Data} />
          <Cards slides={card1Data} imagePosition="right" />
          <Cards slides={card1Data} />
        </div>
      </div>
    </section>
  );
};

export default SkillJourneyPage;
