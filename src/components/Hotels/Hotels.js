import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HotelCard from "./HotelCard/HotelCard";

const Hotels = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <div className="page-continer">
        <div>
          <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Place"
              {...register("Place", { required: true })}
            />
            <input
              type="month"
              placeholder="in"
              {...register("in", { required: true })}
            />
            <input
              type="month"
              placeholder="out"
              {...register("out", { required: true })}
            />
            <input
              type="number"
              placeholder="pax"
              {...register("pax", { required: true })}
            />

            <input type="submit" />
          </form>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
