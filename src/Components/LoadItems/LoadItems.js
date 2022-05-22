import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadItem from "../LoadItem/LoadItem";

const LoadItems = () => {
  const [loadProducts, setLoadProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fierce-falls-28183.herokuapp.com/items")
      .then((data) => setLoadProducts(data.data));
    setProducts(loadProducts?.slice(0, 6));
  }, [loadProducts]);

  

  return (
    <div className="container">
      <h2>All the items {products?.length}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <LoadItem key={product._id} product={product}></LoadItem>
        ))}
      </div>

      <div>
        <Link to="/manageItems">
          <button className="my-3 btn btn-secondary p-3">Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default LoadItems;
