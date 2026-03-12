import { createBrowserRouter } from "react-router";
import SkillJourneyPage from "../pages/skill-journey/SkillJourneyPage";
import Homepage from "../pages/homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "skill-journey",
    element: <SkillJourneyPage />,
  },
  {
    path: "whats-hot",
    element: <Homepage />,
  },
]);
