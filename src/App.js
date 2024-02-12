import { RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import router from "./routing";

function App() {
  return (
    <RouterProvider router={router}>
      <HomePage />
    </RouterProvider>
  );
}

export default App;
