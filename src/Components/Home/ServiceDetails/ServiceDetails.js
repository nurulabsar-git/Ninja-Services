import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BuyNow from '../BuyNow/BuyNow';
import './ServiceDetails.css';


const ServiceDetails = () => {
    const {serviceId} = useParams();
    // console.log(serviceId)
   
    const [serviceDetails, setServiceDetails] = useState({})
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }

    useEffect(() => {
        fetch("https://morning-woodland-93138.herokuapp.com/getProducts")
        .then(result => result.json())
        .then(data => {
            const compareWithServiceId = data.find(datum => datum._id === serviceId)
            // console.log(compareWithServiceId)
            setServiceDetails(compareWithServiceId);

        })
    }, [])

return (
        <main className="service-details">
           <section className="product-info">
           <div  style={{textAlign: 'justify'}}>
             <h4>Name: <span style={{color: 'gray'}}>{serviceDetails?.name?.name}</span></h4>
             <h4>Wight: <span style={{color: 'gray'}}>{serviceDetails?.name?.wight} kg</span></h4>
             <h5>Price: <span style={{color: 'gray'}}>$ {serviceDetails?.name?.price}</span></h5>
            
            </div>
            <div>
                <img src={serviceDetails.imageURL} alt="" className="img-fluid rounded" style={{width:'70%'}}/>
            </div>
           </section>

            <div>
            <button onClick={openModal} type="submit" className="btn-style">Buy Now</button>
            <BuyNow modalIsOpen={modalIsOpen} closeModal={closeModal} productInfo={serviceDetails}></BuyNow>
            </div>
        </main>
    );
};

export default ServiceDetails;