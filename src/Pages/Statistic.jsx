import Chart from "../Components/Chart";

const Statistic = () => {
  return (
    <div>
      <div className="h-[250px] bg-darkpurple text-white text-center p-10 space-y-6">
        <h2 className="text-4xl font-bold"> Statistics </h2>
        <p className="font-thin">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="container mx-auto p-10 space-y-20">
        <h1 className="text-2xl text-gray-700 font-semibold">Statistics</h1>
      <Chart />
      </div>
    </div>
  );
};

export default Statistic;
