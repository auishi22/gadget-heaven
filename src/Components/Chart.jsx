import { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getAllGadgets } from "../Utilities/cart";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cart = getAllGadgets();

    const formatted = cart.map((item) => ({
      name: item.title,
      price: item.price,
      rating: item.rating,
    }));

    setData(formatted);
  }, []);

  return (
    <div className="w-full h-[500px] px-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Smooth light purple background using same price */}
          <Area
            type="monotone"
            dataKey="price"
            stroke="none"
            fill="#9333ea"
            fillOpacity={0.1}
            name="Total"
          />

          {/* Main price bar */}
          <Bar
            dataKey="price"
            fill="#9333ea"
            barSize={40}
            name="Price"
          />

          {/* Optional red line for rating */}
          <Line
            type="monotone"
            dataKey="rating"
            stroke="red"
            strokeWidth={2}
            dot
            name="Rating"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
