import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      {/* Navbar */}
      <div className={`${isHome ? "backdrop-blur " : "bg-white"}`}>
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="min-h-screen bg-base-200 py-16">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
