import React, { useEffect, useState } from 'react';
import SubClothes from './SubClothes';

const Clothes = () => {
    const [clothes, setClothes] = useState([])

    useEffect(() => {
     
    fetch("https://morning-woodland-93138.herokuapp.com/getSkipping")
    .then(result => result.json())
    .then(data => setClothes(data))

    }, [])
    return ( 
        <section className="m-5">
        
        <div style={{margin: '70px 12px 12px 12px', textAlign: 'center'}}>
        <h4>Collect Your Necessary cloth</h4>
        </div>

       <div className="service-container">
       {
             clothes.map(cloth => <SubClothes cloth={cloth}></SubClothes>)
         }
       </div>
        </section>
    );
};

export default Clothes;