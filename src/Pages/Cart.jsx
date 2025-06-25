import { useState } from "react";
import CartCard from "../Components/CartCard";
import { getAllGadgets, getCartTotal, removeToCart } from "../Utilities/cart";
import { GrSort } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const cart = getAllGadgets();
  const [gadgets, setGadgets] = useState(cart);
  const [total, setTotal] = useState(getCartTotal());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...cart].sort((a, b) => b.price - a.price);
      setGadgets(sorted);
    }
  };

  // handle remove button
  const handleRemove = (id) => {
    removeToCart(id);
    const remainning = [...gadgets].filter((item) => item.id !== id);
    setGadgets(remainning);
    setTotal(getCartTotal());
    getAllGadgets();
  };

  // handle purchase button
 const handlePurchase = () => {
  if (gadgets.length === 0) {
    toast.error("Cart is empty!");
    return;
  }

  setFinalTotal(total); // store total before resetting
  setIsModalOpen(true); // open modal first
};
  const handleCloseModal = () => {
    localStorage.removeItem("cart");
    setGadgets([]);
    setTotal(0);
    setIsModalOpen(false);
  };

  return (
    <div className=" bg-base-200 container mx-auto  p-10">
      <div className="flex justify-between px-32 py-8">
        <h1 className="text-2xl text-gray-700 font-semibold">Cart</h1>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-2xl text-gray-700 font-semibold">
            Total Cost: {total}{" "}
          </h1>
          <button
            onClick={() => handleSort("price")}
            className="btn rounded-full border-purple-600 text-purple-600 flex items-center gap-2"
          >
            Sort By Price <GrSort />{" "}
          </button>
          <button
            onClick={() => handlePurchase()}
            className={`btn rounded-full text-white flex items-center gap-2 ${
              gadgets.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="space-y-8 flex flex-col justify-center items-center">
        {gadgets.map((item) => (
          <CartCard item={item} handleRemove={handleRemove} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl text-center max-w-sm w-full">
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                alt="Success"
                className="w-16 h-16"
              />
            </div>
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Payment Successfully
            </h2>
            <p className="text-gray-600 mb-2">Thanks for purchasing.</p>
            <p className="text-gray-800 font-semibold mb-4">
              Total: ${finalTotal.toFixed(2)}
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
