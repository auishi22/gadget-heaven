const Footer = () => {
  return (
    <div >
      <footer className="footer  bg-base-100  p-10   flex flex-col items-center">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Gadget Heaven</h2>
          <p className="text-gray-500 text-base">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="w-full border-t border-gray-200 "></div>
        <div className="footer flex flex-col items-center gap-6 lg:flex-row lg:justify-evenly lg:items-start">
          <nav  className="flex flex-col items-center text-center gap-2">
            <h6 className="text-base font-medium">Services</h6>
            <a className="link link-hover text-gray-500">Product Support</a>
            <a className="link link-hover text-gray-500">Order Tracking</a>
            <a className="link link-hover text-gray-500">Shipping & Delivery</a>
            <a className="link link-hover text-gray-500">Returns</a>
          </nav>
          <nav className="flex flex-col items-center text-center gap-2">
            <h6 className="text-base font-medium">Company</h6>
            <a className="link link-hover text-gray-500">About us</a>
            <a className="link link-hover text-gray-500">Contact</a>
            <a className="link link-hover text-gray-500">Careers</a>
          </nav>
          <nav className="flex flex-col items-center text-center gap-2">
            <h6 className="text-base font-medium">Legal</h6>
            <a className="link link-hover text-gray-500">Terms of Service</a>
            <a className="link link-hover text-gray-500">Privacy policy</a>
            <a className="link link-hover text-gray-500">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
