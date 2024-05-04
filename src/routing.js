import { createBrowserRouter } from "react-router-dom";
import Demo from "./pages/Demo";
import Mission from "./pages/Mission";
import HomeLayout from "./pages/HomeLayout";
import Homepage from "./pages/Homepage";
import Organogram from "./pages/Organogram";
import Daycare from "./pages/Daycare";
import Partnership from "./pages/Partnership";
import JourneyOfSheva from "./pages/JourneyOfSheva";
import Founder from "./pages/Founder";
import MicroCredit from "./pages/MicroCredit";
import ConsultancyService from "./pages/ConsultancyService";
import AnnualAudit from "./pages/AnnualAudit";
import AwardRecognition from "./pages/AwardRecognition";
import Bangabandhu from "./pages/Bangabandhu";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/journeyofsheva",
        element: <JourneyOfSheva />,
      },
      {
        path: "/mission-and-vision",
        element: <Mission />,
      },
      {
        path: "/organogram",
        element: <Organogram />,
      },
      {
        path: "/ourFounderAndGovernance",
        element: <Founder />,
      },
      {
        path: "/annualAndAudit",
        element: <AnnualAudit />,
      },
      {
        path: "/awardAndRecognition",
        element: <AwardRecognition />,
      },
      {
        path: "/dayCare",
        element: <Daycare />,
      },
      {
        path: "/partnershipProgram",
        element: <Partnership />,
      },
      {
        path: "/microCredit",
        element: <MicroCredit />,
      },
      {
        path: "/consultancyServices",
        element: <ConsultancyService />,
      },
      {
        path: "/bangabandhu-corner",
        element: <Bangabandhu />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Demo />,
      },
      // {
      //   path: "/",
      //   element: < />,
      // },
    ],
  },

  // {
  //   path: "*",
  //   element: <Demo />,
  // },
]);

export default router;
