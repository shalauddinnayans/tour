import React from "react";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  const { _id, place, price, imgUrl } = tour;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
        </div>
        <h3>BDT {price}/Night</h3>
        <Link to={`/tourbooking/${_id}`}>
          <button>BOOK Now</button>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;

<h1>this is tour card</h1>;
