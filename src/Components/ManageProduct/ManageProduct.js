import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        fetch("https://morning-woodland-93138.herokuapp.com/getProducts")
        .then(result => result.json())
        .then(data => setManageProduct(data))
    })

 const handleDeleteData = (id) => {
    fetch(`https://morning-woodland-93138.herokuapp.com/deleteProduct/${id}`, {
        method : 'DELETE'
    })
    .then(result => result.json())
    .then(data => {
        console.log(data)
        window.location.reload();
    })
 }

    return (

        <table class="table"> 
         
         <thead>
         <tr>
            <th>Name</th> <br/> <br/>
            <th>Email</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
          </thead>  
          {
              manageProduct.map(datum => 
            <tbody>
               <tr>
                <td>{datum?.name.name}</td> <br/> <br/>
                  <td> {datum?.name.email}</td>
                  <td>$ {datum?.name.price}</td>
                  <td>
                  <button onClick={() => handleDeleteData(datum._id)} className="bg-success rounded"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                  </td> 
              </tr>
            </tbody>
              
              
              )
          }
     </table>
    );
};

export default ManageProduct;