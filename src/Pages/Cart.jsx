import { useState } from "react";
import CartCard from "../Components/CartCard";
import { getAllGadgets, getCartTotal } from "../Utilities/cart";
import { GrSort } from "react-icons/gr";

const Cart = () => {
  const cart = getAllGadgets();
  const [gadgets, setGadgets] = useState(cart);
  const [total, setTotal] = useState(getCartTotal());

  

  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...cart].sort((a, b) => b.price - a.price);
      setGadgets(sorted);
    }
  };

  return (
    <div className=" bg-base-200 container mx-auto  p-10">
      <div className="flex justify-between px-32 py-8">
        <h1 className="text-2xl text-gray-700 font-semibold">Cart</h1>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-2xl text-gray-700 font-semibold">Total Cost: {total} </h1>
          <button
            onClick={() => handleSort("price")}
            className="btn rounded-full border-purple-600 text-purple-600 flex items-center gap-2"
          >
            Sort By Price <GrSort />{" "}
          </button>
          <button className="btn rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center gap-2">
            Purchase
          </button>
        </div>
      </div>
      <div className="space-y-8 flex flex-col justify-center items-center">
        {gadgets.map((item) => (
          <CartCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
