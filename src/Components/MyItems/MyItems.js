import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;
  console.log(email);
  console.log(myItems);

  useEffect(() => {
    axios
      .get(`https://fierce-falls-28183.herokuapp.com/addedby/${email}`)
      .then((data) => setMyItems(data.data));
  }, [user]);

  const deleteItem = id => {
    const newProducts = myItems.filter(item => item._id !== id);
    setMyItems(newProducts);
  axios
    .delete(`https://fierce-falls-28183.herokuapp.com/item/${id}`)
    .then(() => console.log({ status: "Delete successful" }));
};

if (loading) {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
        </div>
    );
  }
  return (
    <div>
      <h1>welcome to my items {myItems?.length}</h1>

      <div className="container">
        <Table responsive>
          <thead>
            <tr className="text-start">
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th className="text-center">Delete</th>              
            </tr>
          </thead>
          <tbody>
            
              {
                  myItems.map(item => <MyItem
                  key={item._id}
                  item={item}
                  deleteItem={deleteItem}
                  ></MyItem>)
              }
                        
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyItems;
