import axios from 'axios';
import React from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    
  const handleOnSubmit = e => { 
    e.preventDefault();
 const data = {
     name: e.target.name.value,
     description: e.target.description.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      sold: "0",
      supplier: e.target.supplier.value,
      img: e.target.img.value,
      addedby: user.email,
  } 
        axios.post('https://fierce-falls-28183.herokuapp.com/item',data)
        .then(response => console.log(response.data.id)); 
        e.target.reset();
      
  };
  if (loading) {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
        </div>
    );
  }
    return (
        <div className='container w-50'>
            <h3>Add any fresh green item</h3>
            <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="name" placeholder="Item Name" autoFocus required/>
            </Form.Group>
            <Form.Group
              className="mb-3"              
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" name="description" placeholder="Description" rows={3} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="text" name="price" placeholder="Price" required/>
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control type="text" name="quantity" placeholder="Quantity" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Control type="text" name="supplier" placeholder="Supplier" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Control type="text" name="img" placeholder="Image URL" required/>
            </Form.Group>
            <p className='text-start'>Item added by: <span className='text-primary'>{user?.email}</span></p>
            <button className='btn btn-warning' type="submit">Submit</button>
          </Form>
        </div>
    );
};

export default AddItem;