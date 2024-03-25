import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routing";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <RouterProvider router={router}>
      <HomeLayout />
    </RouterProvider>
  );
}

export default App;
