import { Link } from "react-router";

const Homepage = () => {
  return (
    <div className="">
      <section className="container mx-auto flrx gap-2 ">
        <Link to="skill-journey">Skill Journey</Link>
        <Link to="whats-hot">What's Hot</Link>
      </section>
    </div>
  );
};

export default Homepage;
