import React, { useEffect, useState } from 'react';
import SubServices from '../SubServices/SubServices';
import './OurServices.css'


const OurServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
    fetch("https://morning-woodland-93138.herokuapp.com/getProducts")
    .then(result => result.json())
    .then(data => setServices(data))

    }, [])
    return (
        <div className="service-container" style={{margin: '20px', textAlign: 'center'}}>
           
            {
                services.map(singleProduct => <SubServices singleProduct={singleProduct}></SubServices>)
            }
     </div>
    );
};

export default OurServices;