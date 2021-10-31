import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TourCard from "./TourCard/TourCard";
import "./Tours.css";

const Tours = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://desolate-brushlands-62727.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
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
          {tours.map((tour) => (
            <TourCard key={tour._id} tour={tour}></TourCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
