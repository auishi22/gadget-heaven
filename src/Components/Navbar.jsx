import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { getAllGadgets } from "../Utilities/cart";
import { getAllWishlist } from "../Utilities/wishlist";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [cartLen, setCartLen] = useState(0);
  const [wishlistLen, setWishlistLen] = useState(0);

   useEffect(() => {
    setCartLen(getAllGadgets().length);
    setWishlistLen(getAllWishlist().length);
  }, [location]);

  return (
    <div
      className={`navbar  transition-all duration-300 backdrop-blur ${
        isHome
          ? "absolute backdrop-blur inset-0 w-full bg-darkpurple text-white rounded-t-2xl p-10  max-w-[1550px] mx-auto mt-10"
          : "top-0 left-0 z-50 fixed w-full bg-base-100 text-black"
      } lg:px-60`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/" className="text-sm lg:text-2xl font-bold">
            Gadget Heaven
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isHome
                ? "text-white"
                : isActive
                ? "relative text-purple-600 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 after:ease-in-out after:w-full"
                : "text-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistic"
            className={({ isActive }) =>
              isHome
                ? "text-white"
                : isActive
                ? "relative text-purple-600 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 after:ease-in-out after:w-full "
                : "text-gray-500"
            }
          >
            Statistic
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isHome
                ? "text-white"
                : isActive
                ? "relative text-purple-600 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 after:ease-in-out after:w-full"
                : "text-gray-500"
            }
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button
          onClick={() => navigate("/dashboard/cart")}
          className="relative"
        >
          <h2 className="relative btn text-xl rounded-full p-2">
            <PiShoppingCart />{" "}
          </h2>
          {cartLen > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartLen}
            </span>
          )}
        </button>
        <button
          onClick={() => navigate("/dashboard/wishlist")}
          className="relative"
        >
          <h2 className="relative btn text-xl rounded-full p-2">
            <CiHeart />{" "}
          </h2>
          {wishlistLen > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistLen}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
