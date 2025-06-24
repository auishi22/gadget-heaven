import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* banner section */}
      <div className="relative">
        <Banner />
      </div>

      {/* gadgets section */}
      <div className="text-center pb-16">
        <h1 className="text-4xl font-bold "> Explore Cutting-Edge Gadgets</h1>
      </div>
      <div className="container mx-auto px-28 flex  gap-20">
        {/* Categories */}
        <div >
            <Categories categories={categories} />
        </div>
        {/* Dynamic nasted components */}
        <div  className="flex-1">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
