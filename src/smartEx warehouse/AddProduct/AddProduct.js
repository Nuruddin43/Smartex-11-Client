import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://young-taiga-28195.herokuapp.com/product`;
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
      className="w-75 mt-5 mx-auto border rounded row"
      style={{ backgroundColor: "#E7EEDC" }}
    >
      <div className="col-12 col-sm-12">
        <h2 className=" text-center border ">Add new Product</h2>
        <form
          className="d-flex flex-column p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            className="mb-2"
            placeholder="Quantity"
            type="number"
            {...register("Quantity")}
          />
          <input
            className="mb-2"
            placeholder="Supplier Name"
            type="text"
            {...register("SupplierName")}
          />
          <input
            className="w-50 mx-auto border-0 rounded"
            style={{
              backgroundImage:
                "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
            }}
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
