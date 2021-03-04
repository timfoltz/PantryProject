import React from 'react';
import { useState } from 'react'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


function App() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const submitReview = () =>{
    console.log('inside submit review')
    Axios.post('http://localhost:8080/api/insert',{
      itemName:itemName, 
      itemDescription:itemDescription},
      console.log("afterPost"))
      .then(res=> {
                console.log("inside .then ",res)
                alert(`You successfully added ${itemName} to the database`)
              })
              .catch(err =>{
                console.log("inside .catch ",err);

              })
  }
  return (
    <div className="wrapper">
      <div>
        <h1>CRUD App</h1>
      </div>
      <div className="form">
      {/* {itemName} */}
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          onChange={(e)=> {
          setItemName(e.target.value)
          }} 
        />
          {/* {itemDescription} */}
        <label htmlFor="description">Description</label>
        <textarea 
          type="text" 
          name="description" 
          onChange={(e)=> {
          setItemDescription(e.target.value)
          }}
        />
        <button onClick={submitReview} >Submit</button>
      
      </div>

    </div>
  );
}

export default App;
