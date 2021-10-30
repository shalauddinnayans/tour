import React from "react";

const TourCard = ({ tour }) => {
  const { place, price, imgUrl } = tour;
  return (
    <div className="col">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
          {/* <h6>{place}</h6>
          <p className="card-text">
            <small>{rating}</small>
            <small>({review} Reviews)</small>
          </p> */}
        </div>
        <h3>BDT {price}/Night</h3>
        <button>BOOK Now</button>
      </div>
    </div>
  );
};

export default TourCard;

<h1>this is tour card</h1>;
