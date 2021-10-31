import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddHotel = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://desolate-brushlands-62727.herokuapp.com/hotels", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("add successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          type="number"
          placeholder="Rating"
          {...register("rating", { required: true })}
        />
        <input
          type="number"
          placeholder="Review"
          {...register("review", { required: true })}
        />
        <input
          type="text"
          placeholder="Place"
          {...register("place", { required: true })}
        />
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <input
          type="url"
          placeholder="Image Url"
          {...register("imageUrl", { required: true })}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddHotel;
