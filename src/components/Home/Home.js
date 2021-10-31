import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);
  return (
    <div>
      <div>
        <h1> Hotel Booking</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {hotel.map((hotel) => (
            <div key={hotel._id} className="col">
              <div className="card h-100">
                <img src={hotel.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <h6>{hotel.place}</h6>
                  <p className="card-text">
                    <small>{hotel.rating}</small>
                    <small>({hotel.review} Reviews)</small>
                  </p>
                </div>
                <h3>BDT {hotel.price}/Night</h3>
                <Link to={`/hotelbooking/${hotel._id}`}>
                  <button>BOOK Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Tour Booking</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tours.map((tour) => (
            <div className="col">
              <div className="card h-100">
                <img src={tour.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{tour.place}</h5>
                </div>
                <h3>BDT {tour.price}/Night</h3>
                <Link to={`/tourbooking/${tour._id}`}>
                  <button>BOOK Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
