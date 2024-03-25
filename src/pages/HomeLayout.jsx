import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      {/* Set minimum screen height */}
      <Navbar />
      <main className="flex-grow overflow-auto">
        {" "}
        {/* Main content area */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
