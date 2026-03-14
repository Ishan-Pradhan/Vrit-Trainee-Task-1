import { Link } from "react-router";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-nohemi font-bold text-3xl">
          Vrit Tech Trainee — Frontend Task 1
        </h1>
        <div className="flex flex-col gap-4 text-center font-outfit text-lg">
          <Link
            to="/task-1"
            className="px-8 py-4 rounded-2xl bg-[#1DA077] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Task 1
          </Link>
          <Link
            to="/task-2"
            className="px-8 py-4 rounded-2xl bg-[#C33241] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Task 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
