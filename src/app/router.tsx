import { createBrowserRouter } from "react-router";
import SkillJourneyPage from "../pages/skill-journey/SkillJourneyPage";
import Homepage from "../pages/homepage/Homepage";
import WhatsHotPage from "../pages/whats-hot/WhatsHotPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "task-1",
    element: <SkillJourneyPage />,
  },
  {
    path: "task-2",
    element: <WhatsHotPage />,
  },
]);
