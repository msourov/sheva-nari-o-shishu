import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Demo from "./pages/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Demo />,
  },
]);

export default router;
