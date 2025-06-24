import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  //   console.log(categories);
  return (
    <div className="border p-6 rounded-2xl bg-white flex flex-col gap-6">
      <NavLink to="/">
        {({ isActive }) => (
          <button
            className={`btn w-44  px-8 py-6 rounded-full border-none ${
              isActive
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080D0D] text-gray-600 "
            }`}
          >
            All Products
          </button>
        )}
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
        >
         {({ isActive }) => (
          <button
            className={`btn w-44  px-8 py-6 rounded-full border-none ${
              isActive
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080D0D] text-gray-600 "
            }`}
          >
            {category.category}
          </button>
         )}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
