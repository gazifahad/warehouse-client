import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    axios.get("https://lit-plains-40003.herokuapp.com/items")
    .then((data) => setProducts(data.data));
  }, []);

  const deleteItem = id => {
      const newProducts = products.filter(item => item._id !== id);
      setProducts(newProducts);
    axios.delete(`https://lit-plains-40003.herokuapp.com/item/${id}`)
      .then(() => console.log({ status: "Delete successful" }));
  };



  return (
    <div className="container">
      <h2>Items: {products?.length}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <ManageItem key={product._id} product={product} deleteItem={deleteItem}></ManageItem>
        ))}
      </div>

      <div>
        <Link to='/additem'><button className="my-3 btn btn-warning p-3">
          + Add New Item
        </button></Link>
      </div>
      </div>
  );
};

export default ManageItems;
