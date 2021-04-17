import React from 'react';
import SubReview from './SubReview';
import pic1 from './p.jpg';
import pic2 from './p2.jpg';
import pic3 from './pi2.jpg';


const reviewData = [
    {
        img      : pic1,
        name     :'Albert Gain',
        title    :'CEO, London',
        content  :'This website helpful for everyone, Everyone will be find their won necessary product.'
    },
    {
        img      :pic2,
        name     :'James Smith',
        title    :'CEO, Bangladesh',
        content  :'I get my necessary food & product from this website , so it was helpful for me!'
    },
    {
        img      :pic3,
        name     :'Kelvin Smith',
        title    :'CEO, Dhaka',
        content  :'This website helpful for everyone, Everyone will be find their won necessary product!'
    }
]

const Review = () => {
    return (
        <section>
            <div className="service-container">
                {
                    reviewData.map(datum => <SubReview datum={datum}></SubReview>)
                }
            </div>
        </section>
    );
};

export default Review;