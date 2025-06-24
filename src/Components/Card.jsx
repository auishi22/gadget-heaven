import { Link } from "react-router-dom";

const Card = ({ gadget }) => {

    const {id,title,price,image}=gadget

  return (
    <div  className="card bg-gray-50 w-80 shadow-xl transition-transform hover:scale-105 hover:border hover:border-[#ca9bf0]">
      <figure className=" px-6 pt-6 ">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-full object-contain border border-gray-100"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-500">Price :{price} </p>
        <Link to={`/gadget/${id}`} className="card-actions">
          <button className="btn bg-white rounded-full border-[#9538E2] text-[#9538E2]">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;