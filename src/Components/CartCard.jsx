import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { removeToCart } from "../Utilities/cart";

const CartCard = ({ item,handleRemove }) => {
  const { id, title, description, price, image } = item;
  const navigate = useNavigate();

  
  return (
    <div class="relative w-[1226px] bg-base-200 flex bg-white rounded-3xl shadow-xl ">
       <button
    onClick={() => handleRemove(id)}
    className="absolute top-6 right-6 text-red-500 hover:bg-red-100 border border-red-500 rounded-full p-1"
  >
    <RxCross2 />
  </button>
      <div
        onClick={() => navigate(`/gadget/${id}`)}
        className="p-6 flex  items-center flex-col gap-10 lg:flex-row"
      >
        <img
          src={image}
          class="w-[200px] h-[150px] object-contain rounded-lg shadow- border-2 border-base-300"
        />
        <div className="py-2 space-y-3">
          <h1 className="text-2xl text-gray-700 font-semibold">{title}</h1>
          <p className=" font-light text-gray-500">{description}</p>
          <h4 className="text-lg font-medium text-gray-600">
            Price: ${price}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
