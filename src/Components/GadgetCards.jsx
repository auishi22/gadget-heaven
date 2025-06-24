import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const gadgetsData = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  // console.log(gadgetsData, category);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...gadgetsData].filter(
        (gadget) => gadget.category == category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(viewAll ? gadgetsData : gadgetsData.slice(0, 6));
    }
  }, [gadgetsData, category, viewAll]);
  return (
    <div>
      {gadgets.length === 0 ? (
        <div>
          <h1 className="text-3xl font-bold text-[#9538E2]">
            No gadgets found in this category
          </h1>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gadgets.map((gadget) => (
              <Card key={gadget.id} gadget={gadget} />
            ))}
          </div>
          <div>
            {!category && gadgetsData.length > 3 && (
              <button
                onClick={() => setViewAll(!viewAll)}
                className="btn px-8 py-6 my-10 bg-[#9538E2] text-white rounded-full"
              >
                {viewAll ? "View Less" : "View All"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GadgetCards;
