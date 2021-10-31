import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderHotelCard from "./OrderHotelCard";
import OrderTourCard from "./OrderTourCard";

const MyOrder = () => {
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourorder")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/hotelorder")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <div>
        <Link to="/manageorder">Order Management</Link>
        <Link to="/add">Add Services</Link>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {tours.map((tour) => (
            <OrderTourCard key={tour._id} tour={tour}></OrderTourCard>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {hotels.map((hotel) => (
            <OrderHotelCard key={hotel._id} hotel={hotel}></OrderHotelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
