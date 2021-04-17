import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AdminParts.css';


const AdminParts = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);
 
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data,
            imageURL: imageURL

        };
        const url =`http://localhost:5000/addProduct`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData) 
        })
        .then(res => console.log('server side response'))
    };

    const handleDataUpload = event =>{
        
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '9970ad600052ea225f3a4b3a11dfd736');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
              console.log(response);
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }


    return (
        <div className="admin-part">
    <form onSubmit={handleSubmit(onSubmit)}>
    <input name="name" {...register("name", { required: true })} placeholder="Enter The Name"  className="input-style" /> <br/>
      <input name="wight" {...register("wight", { required: true })} placeholder="Enter The Wight" className="input-style"/> <br/>
      <input name="price" {...register("price", { required: true })} placeholder="Enter The Price" className="input-style"/> <br/>
      <input name="email" {...register("email", { required: true })} placeholder="Please Enter Your Email" className="input-style"/> <br/>
      <input type="file" onChange={handleDataUpload} className="input-style fa fa-cloud-upload" aria-hidden="true"  /> <br/> <br/>
      <input type="submit" className="submit-btn-style"/>
    </form>
    
        </div>
    );
};

export default AdminParts;