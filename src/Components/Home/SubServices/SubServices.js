import React from 'react';
import { useHistory } from 'react-router-dom';
import './SubServices.css';
const SubServices = (props) => {
    const {name, imageURL, _id} = props.singleProduct;
    const history = useHistory()

    const handleButtonClick = (parameter) => {
        history.push(`/service/${parameter}`); 
    }


    return (
        <section onClick={()=> {handleButtonClick(_id)}} className="sub-services">
            <img src={imageURL} className="card-img-top" style={{width: '100%'}} alt="..."></img>
            <div style={{color: 'gray'}}>
            <h5>Name: {name.name}</h5>
            <h5>Price: $ {name.price}</h5>
            <h5>Wight: {name.wight}</h5>
           </div> 
           {/* transform: rotate(300deg);    */}
        </section>
    );
};

export default SubServices;