import React, { useEffect, useState } from "react";
import TourItelmsCard from "./TourItemsCard";
import HotelItemsCard from "./HotelItemsCard";

const ManageAllOrders = () => {
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/tourorder")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/hotelorder")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <h1>hello</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {tours.map((tour) => (
            <TourItelmsCard key={tour._id} tour={tour}></TourItelmsCard>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {hotels.map((hotel) => (
            <HotelItemsCard key={hotel._id} hotel={hotel}></HotelItemsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
