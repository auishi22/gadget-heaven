import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="relative mb-[300px] mt-10">
      <div className=" w-full max-w-[1550px] h-[694px] mx-auto bg-darkpurple text-white text-center p-20 space-y-8 rounded-2xl">
        <h1 className="text-5xl font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn px-10 py-6 font-bold text-purple-700 bg-white rounded-full">
          Shop Now
        </button>
      </div>
      <div className="absolute  left-1/2 transform -translate-x-1/2 -bottom-56 z-10 p-4 border-2 border-white rounded-2xl bg-[#ffffff4D] ">
        <img className="w-[1050px] h-[500px] object-cover rounded-xl" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
