import toast from "react-hot-toast";

// get all gadgets from local storage
const getAllGadgets = () => {
  const all = localStorage.getItem("cart");

  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};

// add a gadget to local storage
const addToCart = (gadget) => {
  const cart = getAllGadgets();
  const exist = cart.find((item) => item.id == gadget.id);
  if (exist) {
    return toast.error("Already Exist!");
  }
  console.log(cart);
  cart.push(gadget);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully Added!");
};

// Total price of the cart's products
const getCartTotal = () => {
  const cart = getAllGadgets();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return totalPrice;
};

// remove a coffee from local storage
const removeToCart = (id) => {
  const cart = getAllGadgets();
  const remaining = [...cart].filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.success("Removed from cart!");
};

export { addToCart, getAllGadgets, getCartTotal, removeToCart };
