import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { removeToCart } from "../Utilities/cart";

const CartCard = ({ item,handleRemove }) => {
  const { id, title, description, price, image } = item;
  const navigate = useNavigate();

  
  return (
    <div class="w-[1226px] bg-base-200 flex bg-white rounded-3xl shadow-xl ">
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
      <button onClick={() => handleRemove(id)}>
        <h1 className="ml-96 p-1 rounded-full text-xl text-red-600 border border-red-600 hover:bg-red-200 transform transition hover:scale-110">
          {" "}
          <RxCross2 />{" "}
        </h1>
      </button>
    </div>
  );
};

export default CartCard;
