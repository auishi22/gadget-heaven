import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layouts/MainPage";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";
import GadgetCards from "../Components/GadgetCards";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist";
import DetailCard from "../Components/DetailCard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards />,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },

      {
        path: "/gadget/:id",
        element: <ProductDetails />,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

export default routes;
