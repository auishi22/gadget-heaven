import CartCard from "../Components/CartCard";
import { getAllWishlist } from "../Utilities/wishlist";

const Wishlist = () => {
  const wishlist = getAllWishlist();
  return (
    <div className=" bg-base-200 container mx-auto  p-10">
      <div className="flex justify-between px-32 py-8">
        <h1 className="text-2xl text-gray-700 font-semibold">WishList</h1>
      </div>

      <div className="space-y-8 flex flex-col justify-center items-center">
        {wishlist.map((item) => (
          <CartCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
