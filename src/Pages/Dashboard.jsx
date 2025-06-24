import { NavLink, Outlet } from "react-router-dom";
import Heading from "../Components/Heading";

const Dashboard = () => {
  return (
    <div>
        {/* heading section */}
      <div className="h-[300px] bg-darkpurple text-white text-center p-10 space-y-6">
        <h2 className="text-4xl font-bold"> Product Details </h2>
        <p className="font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-6">
          <NavLink to='cart'
            className={({ isActive }) =>
              isActive
                ? "btn px-16 py-6 bg-white text-purple-600 text-lg font-extrabold rounded-full"
                : "btn px-16 py-6 bg-purple-600 border border-white text-white text-lg font-light rounded-full"
            }
          >
            Cart
          </NavLink>
          <NavLink to='wishlist'
            className={({ isActive }) =>
              isActive
                ? "btn px-16 py-6 bg-white text-purple-600 text-lg font-extrabold rounded-full"
                : "btn px-16 py-6 bg-purple-600 border border-white text-white text-lg font-light rounded-full"
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
