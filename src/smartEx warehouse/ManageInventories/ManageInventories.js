import React from "react";
import { Button } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";

const ManageInventories = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceedConfirm = window.confirm("Are you sure?");
    if (proceedConfirm) {
      const url = `http://localhost:5000/product/${id}`;
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
    <div className="w-50 mx-auto bg-light mt-5 rounded p-3">
      <h2 className="text-center">Manage Your Services</h2>

      {products.map((product) => (
        <div key={product._id}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Supplier Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.SupplierName}</td>
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
  );
};

export default ManageInventories;
