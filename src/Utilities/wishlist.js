import toast from "react-hot-toast";

// get all gadgets from local storage
const getAllWishlist = () => {
  const all = localStorage.getItem("wishlist");
  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};

// add a gadget to local storage
const addToWishlist = (gadget) => {
  const wishlist = getAllWishlist();
  const exist=wishlist.find(item=>item.id==gadget.id)
  if(exist){
    return toast.error("Already Exist!");
  }else{
    toast.success("Successfully Added!");
  }
  wishlist.push(gadget);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  console.log(wishlist);
};

// remove a coffee from local storage
const removeToWishlist = (id) => {
  const cart = getAllWishlist();
  const remaining = [...cart].filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Removed from wishlist!");
  window.location.reload(); // just after add/remove

};

export { addToWishlist, getAllWishlist,removeToWishlist };
