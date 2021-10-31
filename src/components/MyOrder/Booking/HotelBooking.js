import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { hotelId } = useParams();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://desolate-brushlands-62727.herokuapp.com/hotelorder", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added");
          reset();
          history.push("/order");
        }
      });
  };
  return (
    <div>
      <h1>dsshfhdk {hotelId}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="service-id"
          type="text"
          value={hotelId}
          {...register("orderId", { required: true })}
        />
        <input
          className="service-id"
          type="text"
          value={hotelId}
          {...register("hotelId", { required: true })}
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
