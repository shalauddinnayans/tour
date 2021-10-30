import React from "react";
import { useForm } from "react-hook-form";

const AddTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Place"
          {...register("Place", { required: true })}
        />
        <input
          type="number"
          placeholder="Price"
          {...register("Price", { required: true })}
        />
        <input
          type="url"
          placeholder="Image Url"
          {...register("Image Url", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTour;
