import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const { _id, name, rating, review, place, price, imgUrl } = hotel;
  return (
    <div className="col">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{place}</h6>
          <p className="card-text">
            <small>{rating}</small>
            <small>({review} Reviews)</small>
          </p>
        </div>
        <h3>BDT {price}/Night</h3>
        <Link to={`/hotelbooking/${_id}`}>
          <button>BOOK Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
