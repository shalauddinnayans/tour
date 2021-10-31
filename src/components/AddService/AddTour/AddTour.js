import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/tours", data).then((res) => {
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

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTour;
