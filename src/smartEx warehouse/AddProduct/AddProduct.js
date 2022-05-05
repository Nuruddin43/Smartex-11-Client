import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div
      className="w-50 mt-5 mx-auto border rounded"
      style={{ backgroundColor: "#E7EEDC" }}
    >
      <h2 className=" text-center border ">Add a Product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="w-50 mx-auto border-0 rounded"
          style={{
            backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
          }}
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
