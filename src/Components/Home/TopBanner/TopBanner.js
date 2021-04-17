import React, {useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SubTopBanner from '../SubTopBanner/SubTopBanner';
import './TopBanner.css';


const TopBanner = () => {
    // console.log(topBannerData)

  const [topBannerProducts, setTopBannerProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getProducts")
    .then(result => result.json())
    .then(data => setTopBannerProducts(data))
  }, [])

   
    return (
        <div className="row background-style">
            <div className="col-md-4" style={{padding: '10px', textAlign: 'center', color: 'white'}}>
            <h4>Most Viewed food</h4>
            <p>Take a test come join with us. Life so endlessly delicious!
              This food We provide 5% discount. 
            </p>
            
             </div>

            <div className="col-md-7">
            <Carousel>
             {
               topBannerProducts.map(datum => <SubTopBanner datum={datum}></SubTopBanner> )
             }
            </Carousel>
        </div>
        </div>
      
    );
};


export default TopBanner;