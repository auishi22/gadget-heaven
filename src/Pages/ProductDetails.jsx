import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../Components/Heading";
import { useEffect, useState } from "react";
import DetailCard from "../Components/DetailCard";

const ProductDetails = () => {
  const gadgetsData = useLoaderData();
  const { id } = useParams();

  const [gadget, setGadget] = useState({});
  

  useEffect(() => {
    const singleGadgetData = [...gadgetsData].find((gadget) => gadget.id == id);
    setGadget(singleGadgetData);
  }, [gadgetsData, id]);
  return (
    <div>
      <div className="relative h-[500px] bg-darkpurple text-white text-center p-10 space-y-6">
        <h2 className="text-4xl font-bold"> Product Details </h2>
        <p className="font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative z-10 max-w-6xl px-4 mx-auto -mt-72">
        <DetailCard gadget={gadget} />
      </div>
    </div>
  );
};

export default ProductDetails;
