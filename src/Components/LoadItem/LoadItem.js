import React from 'react';
import { Link } from 'react-router-dom';

const LoadItem = ({ product, deleteItem }) => {
    return (
        <div className="col">
      <div className="card h-100">
        <img
          src={product.img}
          className="card-img-top w-50 mx-auto"
          alt="..."
        />
        <div className="card-body text-start">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="card-title">{product.name}</h3>
            <h3 className="card-text text-danger">{product.price} $</h3>
          </div>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
          <p className="card-text">Supplier: {product.supplier}</p>
        </div>
        <div>
          <Link to={`/inventory/${product._id}`}><button className="btn btn-success mb-3 w-100">Update</button></Link>
        </div>
      </div>
    </div>
    );
};

export default LoadItem;