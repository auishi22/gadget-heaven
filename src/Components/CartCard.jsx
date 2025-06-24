import { useNavigate } from "react-router-dom";

const CartCard = ({ item }) => {
  const { id, title, description, price, image } = item;
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/gadget/${id}`)} class="w-[1226px] bg-base-200  bg-white rounded-3xl shadow-xl transform transition hover:scale-105">
      <div class="p-6 flex items-center flex-col gap-10 lg:flex-row">
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
