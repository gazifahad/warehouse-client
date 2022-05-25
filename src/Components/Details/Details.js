import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios
      .get(`https://lit-plains-40003.herokuapp.com/item/${id}`)
      .then((data) => setItem(data.data));
  }, [updated]);

  const deleverOne = () => {
    if(Number(item.quantity)>0){        
   item.quantity = (Number(item.quantity) - 1);
   updateQuantity();
}
     
  };



  const handleReStock = e => {
      e.preventDefault();
      if(Number(item.quantity)){        
        item.quantity = (Number(item.quantity) + Number(e.target.quantity.value));
        updateQuantity();
        e.target.reset();
  }
}

  const updateQuantity = async () => {
    const updatedData = {
        description: item.description,
        img: item.img,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        sold: item.sold,
        supplier:item.supplier
      };
      
        await axios
          .put(`https://lit-plains-40003.herokuapp.com/item/${id}`, updatedData)
          .then((data) => console.log('Quantity changed ',data.data));
          setUpdated(!updated);
    }
      
  
  return (
    <div className='min-vh-100 container'>
      <h2>Update Information</h2>
      <div className="d-flex justify-content-evenly align-items-center">
        <div>
          <img className="img-fluid" src={item.img} alt="" />
        </div>
        <div className="text-start">
          <p>Product id : {id}</p>
          <h4>{item.name}</h4>
          <h5>Price: {item.price} $</h5>
          <p>Supplier: {item.supplier}</p>          
          <p>Sold: {item.sold}</p>          
          {/* <p>Added By: {(item.addedby)?item.addedby:'Admin'}</p> */}
          <p>Current Quantity: {item.quantity}</p>
          <button className="btn btn-primary" onClick={deleverOne}>Delivered</button>



          <Form className="mt-4 d-flex" onSubmit={handleReStock}>
          <Form.Group className="me-2 " controlId="exampleForm.ControlInput5">
              <Form.Control type="text" name="quantity" placeholder="Insert Quantity" required/>
            </Form.Group>
            <button className='btn btn-warning' type="submit">Restock</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Details;
