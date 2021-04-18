import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BuyNow from '../../Home/BuyNow/BuyNow';
import '../../Home/OurServices/OurServices.css'
const ClothDetails = () => {
    const {clothId} =  useParams();
    const [clothDetails, setClothDetails] = useState({});
    const [orderData, setOrderData] = useState(null)
    // console.log(orderData)

    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }

    useEffect(() => {
     fetch("https://morning-woodland-93138.herokuapp.com/getSkippingProduct")
     .then(result => result.json())
     .then(data => {
         const clothData = data.find(datum => datum._id === clothId)
        //  console.log(clothData)
         setClothDetails(clothData)
        //  setOrderData(...clothData)
        
     })

    }, [])

    

    return (
        <main className="service-details">
           <section className="product-info">
               <div style={{textAlign: 'justify', margin: '15px'}}>
                   <h6>Price: $ {clothDetails?.name?.name}</h6>
                   <h6>Price: $ {clothDetails?.name?.price}</h6>
               </div>
               <div>
               <img src={clothDetails.imageURL} className="img-fluid rounded" style={{width:'70%'}} alt=""/>
               </div>
           </section>
    <div>
    <button onClick={openModal} type="submit" className="btn-style">Buy Now</button>
    <BuyNow modalIsOpen={modalIsOpen} closeModal={closeModal} clothDetails={clothDetails}></BuyNow>
    </div>

</main>
    );
};

export default ClothDetails;