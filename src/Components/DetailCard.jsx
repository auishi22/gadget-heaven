import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { addToCart, getAllGadgets } from "../Utilities/cart";
import { useEffect, useState } from "react";
import { addToWishlist, getAllWishlist } from "../Utilities/wishlist";

const DetailCard = ({ gadget }) => {
  const {
    id,
    title,
    image,
    price,
    description,
    specification,
    availability,
    rating,
    color,
  } = gadget;

  const [addCart, setAddCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  // add cart button disable
  useEffect(() => {
    const cart = getAllGadgets();
    const exist = cart.find((item) => item.id == id);
    if (exist) {
      setAddCart(true);
    }
  }, [id]);

  // handle add to cart button
  const handleAddToCart = (gadget) => {
    addToCart(gadget);
    setAddCart(true);
  };

  // wishlist button disable
  useEffect(() => {
    const wishlistData = getAllWishlist();
    const exist = wishlistData.find((item) => item.id == id);
    if (exist) {
      setWishlist(true);
    }
  }, [id]);

  // handle add to wishlist
  const handleAddToWishlist = (gadget) => {
    addToWishlist(gadget);
    setWishlist(true)
  };

  return (
    <div className="p-6 bg-white w-[1220px] h-[650px]  mx-auto rounded-xl ">
      <div className="flex justify-center flex-col gap-16 lg:flex-row">
        <img
          src={image}
          className=" h-[590px] object-cover rounded-lg shadow-lg shadow-purple-200 "
        />
        <div className="py-4 space-y-3">
          <h1 className="text-3xl text-gray-700 font-semibold">{title}</h1>
          <h4 className="text-lg font-medium text-gray-600 mt-4">
            Price: ${price}{" "}
          </h4>

          {/* avaiable */}
          <div className="px-4 py-2 rounded-full btn border border-green-400 text-green-400 bg-green-50">
            {availability ? "In stock" : "Out Of stock"}
          </div>

          <p className="py-2  font-light text-gray-500">{description}</p>
          <div>
            <h3 className="py-1 text-lg font-bold text-gray-800">
              Specification:{" "}
            </h3>
            <ol className="list-decimal pl-10 space-y-2  font-light text-gray-500">
              {specification &&
                specification.map((i, index) => <li key={index}>{i}</li>)}
            </ol>
          </div>
          <div>
            <h3 className="py-4 text-lg font-bold text-gray-800 flex items-center gap-3">
              Rating{" "}
              <span className="text-yellow-400 ">
                <FaStar />
              </span>{" "}
            </h3>
            <div className="flex gap-3">
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
              <div className="bg-gray-100 rounded-full px-5 py-1">{rating}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              disabled={addCart}
              onClick={() => handleAddToCart(gadget)}
              className="btn bg-darkpurple text-white rounded-full"
            >
              {addCart ? "Already in Cart" : "Add to Cart"}
              <span className="text-xl">
                <AiOutlineShoppingCart />
              </span>{" "}
            </button>
            <button
              disabled={wishlist}
              onClick={() => handleAddToWishlist(gadget)}
              className={`text-2xl border rounded-full p-2 transition duration-300 hover:scale-105 ${
                wishlist ? "border-red-600 " : " border-gray-50"
              }`}
            >
              <span
                className={`text-xl ${
                  wishlist ? "text-red-500 " : "text-gray-500"
                }`}
              >
                <FaHeart />
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
