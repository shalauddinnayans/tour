import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { tourId } = useParams();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/tourorder", data).then((res) => {
      if (res.data.insertedId) {
        alert("added");
        reset();
        history.push("/order");
      }
    });
  };
  return (
    <div>
      <h1>dsshfhdk {tourId}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="service-id"
          type="text"
          value={tourId}
          {...register("orderId", { required: true })}
        />
        <input
          className="service-id"
          type="text"
          value={tourId}
          {...register("tourId", { required: true })}
        />
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phoneNumber", { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
        />
        <textarea {...register("remarks", {})} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Booking;
