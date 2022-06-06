import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ManageInventories = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceedConfirm = window.confirm("Are you sure?");
    if (proceedConfirm) {
      const url = `https://young-taiga-28195.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="w-75 mx-auto bg-light mt-5 rounded p-2 row">
      <div className="col-12 col-sm-12">
        <h2 className="text-center">Manage Your Services</h2>
        <div className="text-center">
          <Button
            onClick={() => navigate("/addproduct")}
            className="bg-success border-0 text-white"
          >
            + Add new item
          </Button>
        </div>

        {products.map((product) => (
          <div key={product._id}>
            <table className="table table-striped align-items-center justify-content-center">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#</th>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.SupplierName}</td>
                  <td>{product.Quantity}</td>

                  <td>
                    <Button
                      onClick={() => handleDelete(product._id)}
                      className="bg-danger border-0"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
